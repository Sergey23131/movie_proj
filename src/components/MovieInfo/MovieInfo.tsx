import React, {FC, useEffect} from "react";
import {IGenres, IMovie, IVideo} from "../../interfaces";
import css from './MovieInfo.module.css';
import {GenreBadge} from "../GenreBadge";
import {StarsRating} from "../StarsRating";
import {useAppDispatch, useAppSelector} from "../../hooks";
import {movieActions} from "../../redux";
import { VideoPlayer } from "../VideoPlayer";

interface IProps {
    // ПРОПИСАТЬ НОВЫЙ  ИНТЕРФЕЙС
    movieInfo: any;
}

const MovieInfo: FC<IProps> = ({movieInfo}) => {
   const {movieVideo} = useAppSelector(state => state.movieReducer);
    const dispatch = useAppDispatch();

    const {
        id,
        backdrop_path,
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
    }, [dispatch,id])



    const imgBuilder = (backdrop_path: string, size = 400) => `https://image.tmdb.org/t/p/w${size}${backdrop_path}`


        return (
            <div className={css.movieInfoWrapper}>
                <p>{original_title}</p>
                <div className={css.movieInfoBox1}>
                    <div className={css.imageBox2}>{<img src={imgBuilder(backdrop_path)} alt="Movie poster"/>}</div>
                    <div className={css.movieInfoBox3}>
                        <div>
                            Genres: {genres.map((value: IGenres) => (
                            <div key={value.id}>{value.name}</div>
                        ))}
                        </div>

                        <div>
                            Vote Average:
                            {roundedNumber}/10
                            {vote_average && <StarsRating rating={vote_average} />}
                        </div>

                        <p>Original Language: {original_language} </p>

                        <p>Release Date: {release_date}</p>

                        <p>Overview:{overview}</p>
                      {
                          movieVideo && <VideoPlayer videoInfo={movieVideo}/>

                      }

                    </div>
                </div>


            </div>
        );

    }

    export {MovieInfo};
