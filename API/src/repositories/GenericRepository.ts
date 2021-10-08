/* eslint-disable no-console */
import IDatabase from '../interfaces/IDatabase';
import IGenericRepository from '../interfaces/IGenericRepository';
import BaseModel from '../models/BaseModel';
import { v4 as uuidv4 } from 'uuid';

class GenericRepository<T extends BaseModel> implements IGenericRepository<T> {
  public constructor(
    readonly database: IDatabase,
    readonly tableName: string
  ) {}

  list = async (orderFields: string, orderType: string): Promise<T[]> => {
    let orderBy = '';
    if (orderFields.trim() === '') {
      orderType = '';
    } else if (orderType.trim() === '') {
      orderType = 'ASC';
    }

    if (orderType.length > 0) {
      orderBy = ' ORDER BY ' + orderFields + ' ' + orderType;
    }

    const query = 'SELECT * FROM ' + this.tableName + orderBy;
    return this.database
      .executeMany(query, [])
      .then((rows) => {
        return Promise.resolve(rows);
      })
      .catch((error) => {
        console.error('[GenericRepository - list]', error);
        return Promise.reject(error);
      });
  };

  findById = async (entity: T): Promise<T> => {
    const query = 'SELECT * FROM ' + this.tableName + ' WHERE Id = :Id';
    return this.database
      .executeOne(query, entity.Id)
      .then((row) => {
        return Promise.resolve(row);
      })
      .catch((error) => {
        console.error('[GenericRepository - findById]', error);
        return Promise.reject(error);
      });
  };

  create = async (entity: T): Promise<T> => {
    entity.Id = uuidv4();
    const query =
      'INSERT INTO ' + this.tableName + ' ' + this.getInsertFields(entity);
    const entityParams = this.getParams(entity);
    return this.database
      .execute(query, entityParams)
      .then(async (result) => {
        if (result.changes > 0) {
          return Promise.resolve(this.findById(entity));
        }
        console.error('[GenericRepository - update] Falha na insercao');
        return Promise.reject('Falha na inserção');
      })
      .catch((error) => {
        console.error('[GenericRepository - create]', error);
        return Promise.reject(error);
      });
  };

  update = async (entity: T): Promise<T> => {
    const query =
      'UPDATE ' +
      this.tableName +
      ' SET ' +
      this.getUpdateFields(entity) +
      ' WHERE Id = :Id';
    const entityParams = this.getParams(entity);
    return this.database
      .execute(query, entityParams)
      .then(async (result) => {
        if (result.changes > 0) {
          return Promise.resolve(this.findById(entity));
        }
        console.error('[GenericRepository - update] Falha na atualizacao');
        return Promise.reject('Falha na atualização');
      })
      .catch((error) => {
        console.error('[GenericRepository - update]', error);
        return Promise.reject(error);
      });
  };

  delete = async (entity: T): Promise<boolean> => {
    const query = 'DELETE FROM ' + this.tableName + ' WHERE Id = :Id';
    return this.database
      .execute(query, entity.Id)
      .then((result) => {
        return Promise.resolve(result.changes > 0);
      })
      .catch((error) => {
        console.error('[GenericRepository - delete]', error);
        return Promise.reject(error);
      });
  };

  private getInsertFields = (entity: T): string => {
    if (entity == null) return '';

    let text = '';
    let textValues = '';
    for (const field in entity) {
      text += (text === '' ? '(' : ',') + field;
      textValues += (textValues === '' ? '(:' : ',:') + field;
    }
    text += ')';
    textValues += ')';

    const textFinal = text + ' VALUES ' + textValues;
    return textFinal;
  };

  private getUpdateFields = (entity: T): string => {
    if (entity == null) return '';

    let text = '';
    for (const field in entity) {
      text += (text === '' ? '' : ',') + field + ' = :' + field;
    }
    return text;
  };

  private getParams = (entity: T): unknown => {
    const params = {};
    if (entity == null) return params;

    for (const [key, value] of Object.entries(entity)) {
      params[':' + key] = value;
    }
    return params;
  };
}

export default GenericRepository;
