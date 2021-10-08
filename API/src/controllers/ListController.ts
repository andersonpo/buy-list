/* eslint-disable @typescript-eslint/no-unused-vars */
import { Request } from 'express';
import DateHelper from '../Helpers/DateHelper';
import ListItemModel from '../models/ListItemModel';
import ListModel from '../models/ListModel';
import ListService from '../services/ListService';
import GenericController from './GenericController';

class ListController extends GenericController<ListModel> {
  private dateHelper = new DateHelper();

  constructor(private readonly listService: ListService) {
    super(listService);
  }

  getEntityFromRequest(req: Request): ListModel {
    const model = new ListModel();
    model.Id = req.params.id || null;
    model.Name = req.body.name || null;
    model.Date = this.dateHelper.formatDate(
      req.body.date || this.dateHelper.DateNow(),
      'yyyy-mm-dd'
    );
    model.Archived = req.body.archived || false;
    model.Notes = req.body.notes || null;
    model.Products = [];

    const productsBody = req.body.products;
    productsBody.forEach((product) => {
      const item = new ListItemModel();
      item.Id = product.Id;
      item.Price = product.Price || 1;
      item.Quantity = product.Quantity || 1;
      item.Checked = product.Checked || false;
      item.Notes = product.Notes || null;
      item.Total = item.Price * item.Quantity;
      model.Products.push(item);
    });

    return model;
  }
}

export default ListController;
