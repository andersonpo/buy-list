/* eslint-disable no-console */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { Request, Response, NextFunction } from 'express';
import IGenericService from '../interfaces/IGenericService';
import BaseModel from '../models/BaseModel';

abstract class GenericController<T extends BaseModel> {
  constructor(private readonly genericService: IGenericService<T>) {}

  list = async (
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<void> => {
    const orderFields: string = (req.query.orderfields as string) || '';
    const orderType: string = (req.query.ordertype as string) || '';

    await this.genericService
      .list(orderFields, orderType)
      .then((rows) => {
        res.status(200).send(rows);
      })
      .catch((error) => {
        console.error('[GenericController - ERROR list]', error);
        res.status(500).send({ message: error });
      });
  };

  findById = async (
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<void> => {
    const entity = this.getEntityFromRequest(req);
    await this.genericService
      .findById(entity)
      .then((row) => {
        res.status(200).send(row);
      })
      .catch((error) => {
        console.error('[GenericController - ERROR findById]', error);
        res.status(500).send({ message: error });
      });
  };

  create = async (
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<void> => {
    const entity = this.getEntityFromRequest(req);
    await this.genericService
      .create(entity)
      .then((row) => {
        res.status(201).send(row);
      })
      .catch((error) => {
        console.error('[GenericController - ERROR create]', error);
        res.status(500).send({ message: error });
      });
  };

  update = async (
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<void> => {
    const entity = this.getEntityFromRequest(req);
    await this.genericService
      .update(entity)
      .then((row) => {
        res.status(200).send(row);
      })
      .catch((error) => {
        console.error('[GenericController - ERROR update]', error);
        res.status(500).send({ message: error });
      });
  };

  delete = async (
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<void> => {
    const entity = this.getEntityFromRequest(req);
    await this.genericService
      .delete(entity)
      .then((success) => {
        if (success) {
          res.status(204).send();
        } else {
          res.status(404).send();
        }
      })
      .catch((error) => {
        console.error('[GenericController - ERROR delete]', error);
        res.status(500).send({ message: error });
      });
  };

  abstract getEntityFromRequest(request: Request): T;
}

export default GenericController;
