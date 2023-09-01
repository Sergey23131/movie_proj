import {FC} from "react";
import {IMovie} from "../../interfaces";
import {StarsRating} from "../StarsRating";
import {Link} from "react-router-dom";
import {GenreBadge} from "../GenreBadge";

interface IProps {
    movie: IMovie;
}


const MovieListCard: FC<IProps> = ({movie}) => {
    const {id, original_title, vote_average, backdrop_path,genre_ids} = movie;

    const imgBuilder = (backdrop_path: string, size = 400) => `https://image.tmdb.org/t/p/w${size}${backdrop_path}`


    return (
        <Link to={`/movies/${id}`}>

            <p>{original_title}</p>
            <img src={imgBuilder(backdrop_path)} alt="Movie poster"/>
            <GenreBadge ganres={genre_ids}/>
            <div>
                <StarsRating rating={vote_average}/>
            </div>

        </Link>
    );

}

export {MovieListCard};
