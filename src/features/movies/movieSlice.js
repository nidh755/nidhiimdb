import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import api from "../../common/apis/api";
import { APIKey } from "../../common/apis/apikey";

export const fetchAsyncMovies = createAsyncThunk('movies/fetchAsyncMovies', async (term) =>{
    
    const response = await api 
        .get(`?apikeys=${APIKey}&s=${term}&type=movie`);
        
        
        return response.data;
}
);

export const fetchAsyncShows = createAsyncThunk('shows/fetchAsyncShows', async (term) =>{
    
    const response = await api 
        .get(`?apikeys=${APIKey}&s=${term}&type=series`)
        
        
        return response.data;
}
);

export const fetchAsyncMovieOrShowDetail = createAsyncThunk(
    'movies/fetchAsyncShows', async (id) =>{
    const response = await api 
        .get(`?apikeys=${APIKey}&si=${id}&Plot=full`);
        return response.data;
}
);
const initialState = {
    movies:{},
    shows:{},
    selectMovieOrShow: {},
};

const movieSlice = createSlice({
    name: "movies",
    initialState,
    reducers:{
       
        removeSelectedMovieOrShow: (state) =>{
            state.selectMovieOrShow = {};
        },
    },
        extraReducers:{
            [fetchAsyncMovies.pending]: () => {
                console.log("Pending");
            },
            [fetchAsyncMovies.fulfilled]: (state,{payload}) => {
                console.log("Fetched Successfully");
                return{...state,movies: payload}
            },
            [fetchAsyncMovies.rejected]: (state,{payload}) => {
                console.log("Rejected");
               
            },
            [fetchAsyncShows.fulfilled]: (state,{payload}) => {
                console.log("Fetched Successfully");
                return{...state,shows: payload}
            },

            [fetchAsyncMovieOrShowDetail.fulfilled]: (state,{payload}) => {
                console.log("Fetched Successfully");
                return{...state,selectMovieOrShow: payload}
            },
        },
    
});

export const{removeSelectedMovieOrShow} = movieSlice.actions;
export const getAllMovies = (state) => state.movies.movies;
export const getAllShows = (state) => state.movies.shows;
export const getSelectedMovieOrShow = (state) => state.movies.selectMovieOrShow;
export default movieSlice.reducer;