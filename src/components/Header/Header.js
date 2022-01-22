import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { fetchAsyncMovies, fetchAsyncShows } from "../../features/movies/movieSlice";
import log from "../../images/logo.png";
import "./Header.scss";

const Header = () => {
  const [term,setTerm] = useState("");
  const dispatch = useDispatch();
  const submitHandler =(e) => {
    e.preventDefault();
    dispatch(fetchAsyncMovies(term));
    dispatch(fetchAsyncShows(term));
    setTerm("");
    console.log(term);
  }
  return (
    <div className="header">
     
        <div className="logo"> <Link to="/">IMDb Movie App</Link></div>
      <div className="search-bar">
        <form onSubmit={submitHandler}>
          <input type="text" value={term} placeholder="Search Movies or Shows" onChange={(e)=> setTerm(e.target.value)}/>
          <button type="submit"><i className="fa fa-search"></i></button>
        </form>
      </div>
      <div className="log-image">
        <img src={log} alt="log" />
      </div>
    </div>
  );
};

export default Header;