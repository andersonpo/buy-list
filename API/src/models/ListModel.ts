import BaseModel from './BaseModel';
import ListItemModel from './ListItemModel';

class ListModel extends BaseModel {
  public Name: string;
  public Date: string;
  public Products?: ListItemModel[];
  public Archived: boolean;
  public Notes: string;
}

export default ListModel;
