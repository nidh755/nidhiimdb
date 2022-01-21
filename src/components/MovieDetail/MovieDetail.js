import React, { useEffect } from 'react';
import { useParams } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';
import { fetchAsyncMovieOrShowDetail, getSelectMovieOrShow } from '../../features/Movies/movieSlice';
const MovieDetail = () => {
    const {imdbID} = useParams();
    const dispatch = useDispatch();
    const data = useSelector(getSelectMovieOrShow);
    console.log(data);
    useEffect(() =>{
       dispatch (fetchAsyncMovieOrShowDetail(imdbID));

    },[dispatch, imdbID]);
    return (
        <div>
            MovieDetail
        </div>
    );
};

export default MovieDetail;