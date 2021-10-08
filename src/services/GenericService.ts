/* eslint-disable no-console */
import IGenericRepository from '../interfaces/IGenericRepository';
import IGenericService from '../interfaces/IGenericService';
import BaseModel from '../models/BaseModel';

class GenericService<T extends BaseModel> implements IGenericService<T> {
  constructor(private readonly genericRepository: IGenericRepository<T>) {}

  list = async (orderFields: string, orderType: string): Promise<T[]> => {
    return this.genericRepository
      .list(orderFields, orderType)
      .then((rows) => {
        return Promise.resolve(rows);
      })
      .catch((error) => {
        console.error('[GenericService - ERROR list]', error);
        return Promise.reject(error);
      });
  };

  findById = async (entity: T): Promise<T> => {
    return this.genericRepository
      .findById(entity)
      .then((row) => {
        return Promise.resolve(row);
      })
      .catch((error) => {
        console.error('[GenericService - ERROR findById]', error);
        return Promise.reject(error);
      });
  };

  create = async (entity: T): Promise<T> => {
    return this.genericRepository
      .create(entity)
      .then((row) => {
        return Promise.resolve(row);
      })
      .catch((error) => {
        console.error('[GenericService - ERROR create]', error);
        return Promise.reject(error);
      });
  };

  update = async (entity: T): Promise<T> => {
    return this.genericRepository
      .update(entity)
      .then((row) => {
        return Promise.resolve(row);
      })
      .catch((error) => {
        console.error('[GenericService - ERROR update]', error);
        return Promise.reject(error);
      });
  };

  delete = async (entity: T): Promise<boolean> => {
    return this.genericRepository
      .delete(entity)
      .then((success) => {
        return Promise.resolve(success);
      })
      .catch((error) => {
        console.error('[GenericService - ERROR delete]', error);
        return Promise.reject(error);
      });
  };
}

export default GenericService;
