import {IImages} from '../../search/images';

export interface IImagesState {
  images: IImages[];
  selectedImages: IImages;
}
export const initialImagesState: IImagesState = {
  images: null,
  selectedImages: null
};
