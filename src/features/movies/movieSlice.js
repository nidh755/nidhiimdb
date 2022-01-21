import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import api from "../../common/apis/api";
import { APIKey } from "../../common/apis/apikey";

export const fetchAsyncMovies = createAsyncThunk('movies/fetchAsyncMovies', async () =>{
    const movieText="Harry";
    const response = await api 
        .get(`?apikeys=${APIKey}&s=${movieText}&type=movie`);
        
        
        return response.data;
}
);

export const fetchAsyncShows = createAsyncThunk('movies/fetchAsyncShows', async () =>{
    const seriesText="Friends";
    const response = await api 
        .get(`?apikeys=${APIKey}&s=${seriesText}&type=series`)
        
        
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
        addMovies: (state, {payload}) => {
            state.movies = payload;
            
                
            
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

export const{addMovies} = movieSlice.actions;
export const getAllMovies = (state) => state.movies.movies;
export const getAllShows = (state) => state.movies.shows;
export const getSelectedMovieOrShow = (state) => state.movies.selectMovieOrShow;
export default movieSlice.reducer;