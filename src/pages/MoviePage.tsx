import {useAppDispatch, useAppSelector} from "../hooks";
import {useEffect} from "react";
import {movieActions} from "../redux/slice";
import {useParams} from "react-router-dom";

const MoviePage = () => {
    const {movie} = useAppSelector(state => state.movieReducer);
    const dispatch = useAppDispatch();

    const { id } = useParams()

    useEffect(() => {
        const movieId = parseInt(id);
        dispatch(movieActions.getByID({id: movieId}))
    }, [dispatch])


    console.log(movie)

    return (
        <div>
            MoviePage
        </div>
    );

}

export {MoviePage};
