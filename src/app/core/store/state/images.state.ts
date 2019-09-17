import {IImages} from '../../services/search/images';

export interface IImagesState {
  images: IImages[];
  addedImages: IImages[];
  // selectedImages: IImages;
}
export const initialImagesState: IImagesState = {
  images: null,
  addedImages: null,
  // selectedImages: null
};
