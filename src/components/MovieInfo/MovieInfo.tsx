import React, {FC, useEffect} from "react";
import {useAppDispatch, useAppSelector} from "../../hooks";
import {movieActions} from "../../redux";

import {IGenres, IMovie} from "../../interfaces";

import {VideoPlayer} from "../VideoPlayer";
import {StarsRating} from "../StarsRating";

import css from './MovieInfo.module.css';

interface IProps {
    movieInfo: IMovie;
}

const MovieInfo: FC<IProps> = ({movieInfo}) => {
    const {movieVideo, style} = useAppSelector(state => state.movieReducer);
    const dispatch = useAppDispatch();

    const {
        id,
        poster_path,
        genres,
        original_language,
        original_title,
        overview,
        release_date,
        vote_average,
    } = movieInfo


    const roundedNumber = vote_average.toFixed(1);

    useEffect(() => {
        dispatch(movieActions.getVideo({id}));
    }, [dispatch, id])


    const imgBuilder = (backdrop_path: string, size = 400) => `https://image.tmdb.org/t/p/w${size}${backdrop_path}`


    return (
        <div className={`${css.movieInfoWrapper} ${style ? css.movieInfoWrapperLight : css.movieInfoWrapperDark}`}>
            <div className={css.movieInfoBox1}>
                <div className={`${css.imageBox2} ${style ? css.imageBox2Light : css.imageBox2Dark}`}>{<img
                    src={imgBuilder(poster_path)} alt="Movie poster"/>}</div>

                <div className={css.movieInfoBox3}>
                    <p className={css.movieTitle}>{original_title} </p>
                    <p>Release Date: {release_date}</p>
                    <p>Original Language: {original_language} </p>

                    <div className={css.ratingWrapper}>
                        {vote_average && <StarsRating rating={vote_average}/>}{roundedNumber}
                    </div>

                    <div className={css.movieInfoGenres}>
                        Genres: {genres.map((value: IGenres) => (
                        <div key={value.id} className={css.movieOneGenre}>{value.name}</div>
                    ))}

                    </div>
                    <p className={css.movieInfoOverview}>Overview: {overview}</p>
                    <div className={css.movieInfoVideo}>
                        {movieVideo && <VideoPlayer videoInfo={movieVideo}/>}
                    </div>
                </div>
            </div>
        </div>
    );

}

export {MovieInfo};
