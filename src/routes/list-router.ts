import { IRouter } from 'express';
import constants from '../constants';
import ListController from '../controllers/ListController';
import IDatabase from '../interfaces/IDatabase';
import ListRepository from '../repositories/ListRepository';
import ListService from '../services/ListService';

export default (router: IRouter, database: IDatabase): IRouter => {
  const listRepository = new ListRepository(
    database,
    constants.TABLE_NAME_LISTS
  );
  const listService = new ListService(listRepository);
  const listController = new ListController(listService);

  router.get(constants.ENDPOINT_LISTS, listController.list);
  router.get(constants.ENDPOINT_LISTS + '/:id', listController.findById);
  router.post(constants.ENDPOINT_LISTS + '/', listController.create);
  router.put(constants.ENDPOINT_LISTS + '/:id', listController.update);
  router.delete(constants.ENDPOINT_LISTS + '/:id', listController.delete);

  return router;
};
