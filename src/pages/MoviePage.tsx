import {useAppDispatch, useAppSelector} from "../hooks";
import {FC, useEffect} from "react";
import {useParams} from "react-router-dom";
import {MovieInfo} from "../components";
import {movieActions} from "../redux";

const MoviePage: FC = () => {
    const {movie} = useAppSelector(state => state.movieReducer);
    const dispatch = useAppDispatch();

    const {id} = useParams()


    useEffect(() => {
        const movieId = parseInt(id);
        dispatch(movieActions.getByID({id: movieId}))
    }, [dispatch, id])


    return (
        <div>
            {
                movie && <MovieInfo movieInfo={movie}/>
            }
        </div>
    );

}

export {MoviePage};
