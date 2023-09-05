import {useAppDispatch, useAppSelector} from "../../hooks";
import {FC, useEffect, useState} from "react";
import {MovieListCard} from "../MoviesListCard";
import {Outlet} from "react-router-dom";
import {movieActions} from "../../redux";
import css from './MovieList.module.css';
import {GenresList} from "../GenresList";
import {HeaderPreview} from "../HeaderPreview";
import {Pagination} from "../Pagination";


const MovieList: FC = () => {
    const {movies, page, total_pages} = useAppSelector(state => state.movieReducer);
    const {genres} = useAppSelector(state => state.genresReducer);
    const [genreId, setGenreId] = useState<number | null>(null);

    const dispatch = useAppDispatch();

    useEffect(() => {
        if (genreId) {
            dispatch(movieActions.getByGenre({ id: genreId }));
        } else {
            const pageStr = page.toString();
            dispatch(movieActions.getAll(pageStr)).then();
        }
    }, [dispatch, genreId, page,total_pages]);

    const handleGenreClick = (clickedGenreId: number) => {
        setGenreId(clickedGenreId);
    };

    const handlePrevPage = () => {
        if (page > 1) {
            dispatch(movieActions.changePage(page - 1));// Изменяем текущую страницу в Redux store
        }
    };

    const handleNextPage = () => {

        if (page < total_pages) {
            dispatch(movieActions.changePage(page + 1)); // Изменяем текущую страницу в Redux store
        }
    };

    return (
        <div className={css.movieListWrapper}>
            <div>
                {
                    genres && genres.map(value => <GenresList key={value.id} genre={value}
                                                              onGenreClick={handleGenreClick}/>)
                }
            </div>
            <div>
                <div><HeaderPreview/></div>
                <div>
                    {
                        movies && movies.map(value => <MovieListCard key={value.id} movie={value}/>)
                    }
                </div>
                <div>
                    <Pagination handlePrevPage={handlePrevPage} handleNextPage={handleNextPage}/>
                </div>
            </div>

            <Outlet/>
        </div>
    );

}

export {MovieList};
