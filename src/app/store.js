import { configureStore } from '@reduxjs/toolkit';
import ImageSlice from '../features/ImageSlice';
export const store = configureStore({
  reducer: {
        Images: ImageSlice
  },
});
