import { IRouter } from 'express';
import constants from '../constants';
import ListItemsController from '../controllers/ListItemsController';
import IDatabase from '../interfaces/IDatabase';
import ListItemsRepository from '../repositories/ListItemsRepository';
import ProductRepository from '../repositories/ProductRepository';
import ListItemsService from '../services/ListItemsService';
import ProductService from '../services/ProductService';


export default (router: IRouter, database: IDatabase): IRouter => {
  const listItemsRepository = new ListItemsRepository(
    database,
    constants.TABLE_NAME_LIST_ITEMS
  );
  const listItemsService = new ListItemsService(listItemsRepository);
  const productRepository = new ProductRepository(database, constants.TABLE_NAME_PRODUCTS);
  const productService = new ProductService(productRepository);
  const listItemsController = new ListItemsController(listItemsService, productService);

  router.get(constants.ENDPOINT_LISTITEM, listItemsController.list);
  router.get(constants.ENDPOINT_LISTITEM + '/:id', listItemsController.findById);
  router.post(constants.ENDPOINT_LISTITEM + '/', listItemsController.create);
  router.put(constants.ENDPOINT_LISTITEM + '/:id', listItemsController.update);
  router.delete(constants.ENDPOINT_LISTITEM + '/:id', listItemsController.delete);

  return router;
};
