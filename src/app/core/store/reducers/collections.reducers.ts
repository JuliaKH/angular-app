import { ICollectionsState, initialCollectionsState } from '../state/collections.state';
import { ECollectionsActions, CollectionsActions } from '../actions/collections.actions';

export const collectionsReducers = (
  state = initialCollectionsState,
  action: CollectionsActions): ICollectionsState => {
  switch (action.type) {
    case ECollectionsActions.GetCollectionsSuccess: {
      return {
        ...state,
        collections: action.payload
      };
    }
    case ECollectionsActions.GetCollectionsFailure: {
      return action.payload;
    }
    default: return state;
  }
};
