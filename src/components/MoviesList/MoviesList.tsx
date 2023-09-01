import {useAppDispatch, useAppSelector} from "../../hooks";
import {FC, useEffect} from "react";
import {MovieListCard} from "../MoviesListCard";
import {Outlet} from "react-router-dom";
import { movieActions } from "../../redux";



const MovieList: FC = () => {
    const {movies, trigger} = useAppSelector(state => state.movieReducer);
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(movieActions.getAll())
    }, [dispatch, trigger])


    return (
        <div>
            {

                movies.map(value => <MovieListCard key={value.id} movie={value}/>)
            }
            <Outlet/>
        </div>
    );

}

export {MovieList};
