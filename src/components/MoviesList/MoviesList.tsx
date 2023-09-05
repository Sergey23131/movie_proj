import {useAppDispatch, useAppSelector} from "../../hooks";
import {FC, useEffect} from "react";
import {MovieListCard} from "../MoviesListCard";
import {Outlet} from "react-router-dom";
import { movieActions } from "../../redux";
import css from './MovieList.module.css';
import {GenresList} from "../GenresList";



const MovieList: FC = () => {
    const {movies, trigger} = useAppSelector(state => state.movieReducer);
    const {genres} = useAppSelector(state => state.genresReducer);

    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(movieActions.getAll())
    }, [dispatch, trigger])


    return (
        <div className={css.movieListWrapper}>
            {
                genres&& genres.map(value => <GenresList key={value.id} genre={value}/>)
            }
            {

                movies && movies.map(value => <MovieListCard key={value.id} movie={value}/>)
            }
            <Outlet/>
        </div>
    );

}

export {MovieList};
