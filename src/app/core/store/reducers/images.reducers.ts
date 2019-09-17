import {EImagesActions, ImagesActions} from '../actions/images.actions';
import {IImagesState, initialImagesState} from '../state/images.state';

export const imagesReducers = (
  state = initialImagesState,
  action: ImagesActions): IImagesState => {
  switch (action.type) {
    case EImagesActions.GetImagesSuccess: {
      return {
        ...state,
        images: action.payload
      };
    }
    case EImagesActions.GetImagesFailure: {
      return action.payload;
    }
    default: return state;
  }
};
