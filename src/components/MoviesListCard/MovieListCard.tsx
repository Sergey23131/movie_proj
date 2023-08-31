import {FC} from "react";
import {IMovie} from "../../interfaces";
import {StarsRating} from "../StarsRating";
import {Link, useNavigate} from "react-router-dom";

interface IProps {
    movie: IMovie;
}


const MovieListCard: FC<IProps> = ({movie}) => {
    const navigate = useNavigate();
    const {id, title, vote_average, backdrop_path} = movie;

    const imgBuilder = (backdrop_path: string, size = 400) => `https://image.tmdb.org/t/p/w${size}${backdrop_path}`


    return (
        <Link to={`/movies/${id}`}>

            <p>{title}</p>
            <img src={imgBuilder(backdrop_path)} alt="Movie poster"/>
            <div>
                <StarsRating key={movie.id} rating={vote_average}/>
            </div>

        </Link>
    );

}

export {MovieListCard};
