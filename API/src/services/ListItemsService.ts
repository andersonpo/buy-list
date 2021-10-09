import ListItemModel from '../models/ListItemModel';
import ListItemsRepository from '../repositories/ListItemsRepository';
import GenericService from './GenericService';

class ListItemsService extends GenericService<ListItemModel> {
  constructor(private readonly listItemsRepository: ListItemsRepository) {
    super(listItemsRepository);
  }
}

export default ListItemsService;
