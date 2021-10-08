import { IRouter } from 'express';
import constants from '../constants';
import ProductController from '../controllers/ProductController';
import IDatabase from '../interfaces/IDatabase';
import ProductRepository from '../repositories/ProductRepository';
import ProductService from '../services/ProductService';

export default (router: IRouter, database: IDatabase): IRouter => {
  const productRepository = new ProductRepository(
    database,
    constants.TABLE_NAME_PRODUCTS
  );
  const productService = new ProductService(productRepository);
  const productController = new ProductController(productService);

  router.get(constants.ENDPOINT_PRODUCTS, productController.list);
  router.get(constants.ENDPOINT_PRODUCTS + '/:id', productController.findById);
  router.post(constants.ENDPOINT_PRODUCTS + '/', productController.create);
  router.put(constants.ENDPOINT_PRODUCTS + '/:id', productController.update);
  router.delete(constants.ENDPOINT_PRODUCTS + '/:id', productController.delete);
  router.get(
    constants.ENDPOINT_PRODUCTS + '/category/:category',
    productController.listByCategory
  );

  return router;
};
