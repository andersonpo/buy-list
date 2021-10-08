import ListModel from '../models/ListModel';
import ListRepository from '../repositories/ListRepository';
import GenericService from './GenericService';

class ListService extends GenericService<ListModel> {
  constructor(private readonly listRepository: ListRepository) {
    super(listRepository);
  }
}

export default ListService;
