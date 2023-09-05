import {FC} from "react";
import {IMovie} from "../../interfaces";
import {StarsRating} from "../StarsRating";
import {Link} from "react-router-dom";
import {GenreBadge} from "../GenreBadge";
import css from './MovieListCard.module.css';

interface IProps {
    movie: IMovie;
}


const MovieListCard: FC<IProps> = ({movie}) => {
    const {id, original_title, vote_average, backdrop_path, genre_ids, overview} = movie;

    const imgBuilder = (backdrop_path: string, size = 400) => `https://image.tmdb.org/t/p/w${size}${backdrop_path}`


    return (
        <div className={css.movieListCardWrapper}>
            <Link to={`/movies/${id}`} className={css.movieCard}>
                <p className={css.movieListTitle}>{original_title}</p>
                <img src={imgBuilder(backdrop_path)} alt="Movie poster" className={css.movieCardImg}/>
                    <p className={css.movieCardOverview}>{overview}</p>
                    <GenreBadge genresId={genre_ids}/>
                    <div>
                        <StarsRating rating={vote_average}/>
                </div>
            </Link>
        </div>
    );

}

export {MovieListCard};
