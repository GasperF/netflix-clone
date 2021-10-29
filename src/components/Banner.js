import React, { useState, useEffect } from 'react'
import axios from './axios';
import requests from './requests';
import './Banner.css';
import { FaPlus, FaPlay } from 'react-icons/fa';

const Banner = () => {

    const [movie, setMovie] = useState([]);

    useEffect(() => {
        async function fetchData() {

            const request = await axios.get(requests.fetchTopRated);

            setMovie(
                request.data.results[
                    Math.floor(Math.random() * request.data.results.length - 1)
                ] 
            );
            return request;
        }
        fetchData();
    }, []);

    function truncate(str, n) {
        return str?.length > n ? str.substr(0, n - 1) + "..." : str;
    };

    return (
        <header
            className='banner'
            style={{
                backgroundSize: 'cover',
                backgroundImage: `url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`,
                backgroundPosition: '50% 10%',
            }}
            >
            <div className="banner__contents">
                <h1 className='banner__title'>
                    {movie?.title || movie?.name || movie?.original_name}
                </h1>
                <div className="banner__btns">
                    <button className="banner__btn"><FaPlay className='icons'/> Play</button>
                    <button className="banner__btn"><FaPlus className='icons'/>My List</button>
                </div>
                <h2
                    className="banner__desc">{movie?.overview}
                    {truncate(movie?.overview, 10)}
                </h2>
            </div>

            <div className="banner__fade"></div>
        </header>
    )
}

export default Banner;