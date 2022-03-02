import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios';
export const fetchImages = createAsyncThunk(
    "Images/fetchImages",
    async (name) => {
        const response = await axios.get(`https://api.unsplash.com/search/photos/?&query=${name}&per_page=20&count=20&client_id=vXO48hCN-bQrna6DYg_yzZlpX_cdb51VHLEzJEDCML8`)
            .catch((err) => {
                console.log(err);
            })
        return response.data.results
    }
)
const initialState = {
    images: [],
    searchText: "cat"

}

const ImageSlice = createSlice({
    name: "Images",
    initialState,
    reducers: {
        deleteImage: (state, action) => {
            state.images = action.payload

        },
        filter: (state, action) => {
            state.images = action.payload
        },
        uploadImage: (state, action) => {
            state.images.push(action.payload)
        },
        
    },
    extraReducers: {
        [fetchImages.pending]: () => {
            console.log("Pending");
        },
        [fetchImages.fulfilled]: (state, { payload }) => {
            console.log("Fetched Successfully!");
            return { ...state, images: payload };
        },
        [fetchImages.rejected]: () => {
            console.log("Rejected!");
        },
    }

});

export const { deleteImage, filter, uploadImage } = ImageSlice.actions
export default ImageSlice.reducer;
export const searchName = (state) => state.Images.searchText;
export const getImages = (state) => state.Images.images