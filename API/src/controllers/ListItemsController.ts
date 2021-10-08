/* eslint-disable @typescript-eslint/no-unused-vars */
import { Request } from 'express';
import ListItemModel from '../models/ListItemModel';
import ListItemsService from '../services/ListItemsService';
import ProductService from '../services/ProductService';
import GenericController from './GenericController';

class ListItemsController extends GenericController<ListItemModel> {
  private productService : ProductService;

  constructor(private readonly listItemsService: ListItemsService, productService: ProductService) {
    super(listItemsService);
    this.productService = productService;
  }

  getEntityFromRequest(req: Request): ListItemModel {
    const model = new ListItemModel();

    const promiseProduct = this.productService.findById(req.body.product_id || 0);

    model.Id = req.params.id || null;
    model.Quantity = req.body.quantity || 1;
    model.Checked = req.body.checked || false;
    model.Notes = req.body.notes || null;

    Promise.all([promiseProduct]).then((products) => {
      console.log('promise all products', products);
      if (products && products.length > 0) {
        model.Product = products[0];
      }
    });

    return model;
  }
}

export default ListItemsController;
