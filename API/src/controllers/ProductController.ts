/* eslint-disable @typescript-eslint/no-unused-vars */
import { Request, Response, NextFunction } from 'express';
import ProductModel from '../models/ProductModel';
import ProductService from '../services/ProductService';
import GenericController from './GenericController';

class ProductController extends GenericController<ProductModel> {
  constructor(private readonly productService: ProductService) {
    super(productService);
  }

  listByCategory = async (
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<void> => {
    const orderFields: string = (req.query.orderfields as string) || '';
    const orderType: string = (req.query.ordertype as string) || '';
    const category: string = req.params.category;

    await this.productService
      .listByCategory(category, orderFields, orderType)
      .then((rows) => {
        res.status(200).send(rows);
      })
      .catch((error) => {
        console.error('[ProductController - ERROR listByCategory]', error);
        res.status(500).send({ message: error });
      });
  };

  getEntityFromRequest = (req: Request): ProductModel => {
    const model = new ProductModel();
    model.Id = req.params.id || null;
    model.Name = req.body.name || null;
    model.Category = req.body.category || null;
    return model;
  };
}

export default ProductController;
