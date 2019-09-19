import { ICollections } from '../../services/collections/collections';

export interface ICollectionsState {
  collections: ICollections[];
}
export const initialCollectionsState: ICollectionsState = {
  collections: null
};
