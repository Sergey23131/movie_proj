import {FC} from "react";
import {IMovie} from "../../interfaces";
import {StarsRating} from "../StarsRating";
import {Link} from "react-router-dom";
import {GenreBadge} from "../GenreBadge";
import css from './MovieListCard.module.css';
import {useAppSelector} from "../../hooks";

interface IProps {
    movie: IMovie;
}


const MovieListCard: FC<IProps> = ({movie}) => {
    const {style} = useAppSelector(state => state.movieReducer);

    const {id, original_title, vote_average, poster_path, genre_ids, overview} = movie;

    const roundedNumber = vote_average.toFixed(1);


    const imgBuilder = (backdrop_path: string, size = 400) => `https://image.tmdb.org/t/p/w${size}${backdrop_path}`


    return (
        <div className={`${css.movieListCardWrapper} ${style ? css.movieListCardWrapperLight : css.movieListCardWrapperDark}`}>
            <Link to={`/movies/${id}`} className={style ? css.movieCardLight : css.movieCardDark}>
                <div className={css.movieListCardTop}>
                    <img src={imgBuilder(poster_path)} alt="Movie poster" className={css.movieCardImg}/>
                    <p className={css.movieListTitle}>{original_title}</p>
                    <div className={css.movieCardStar}>
                        <StarsRating rating={vote_average}/>
                        <div className={css.voteNumb}>{roundedNumber}/10</div>
                    </div>
                    <div className={css.movieListCardGenres}>
                        <GenreBadge genresId={genre_ids}/>
                    </div>
                </div>

            </Link>
        </div>
    );

}

export {MovieListCard};
