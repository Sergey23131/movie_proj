import {FC} from "react";
import {IMovie} from "../../interfaces";

interface IProps {
    movieInfo: IMovie;
}

const MovieInfo: FC<IProps> = ({movieInfo}) => {
  /*  const {backdrop_path,adult,original_language,original_title,overview,release_date,vote_average}=movieInfo
*/
    const imgBuilder = (backdrop_path: string, size = 400) => `https://image.tmdb.org/t/p/w${size}${backdrop_path}`


    return (
        <div>
{/*
            <img src={imgBuilder(backdrop_path)} alt="Movie poster"/>
*/}
        </div>
    );

}

export {MovieInfo};
