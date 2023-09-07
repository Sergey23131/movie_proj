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
    const [search, setSearch] = useState<string | null>(null);


    const dispatch = useAppDispatch();

    useEffect(() => {
        const pageStr = page.toString();

        if (genreId) {
            dispatch(movieActions.getByGenre({id: genreId, currentPage: pageStr}));
        } else if (search) {
            dispatch(movieActions.getBySearch({params: search, currentPage: pageStr}));
        } else {
            dispatch(movieActions.getAll(pageStr)).then();
        }
    }, [dispatch, genreId, page, total_pages, search]);

    const handleGenreClick = (clickedGenreId: number) => {
        setGenreId(clickedGenreId);
    };

    const handleSearchClick = (value: string) => {
        setSearch(value);
    }

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

    const handlePageChange = (newPage: number) => {
        dispatch(movieActions.changePage(newPage));
    };

    return (
        <div className={css.movieListWrapper}>
            <div className={css.movieGenres}>
                {
                    genres && genres.map(value => <GenresList key={value.id} genre={value}
                                                              onGenreClick={handleGenreClick}/>)
                }
            </div>
            <div className={css.movieListSearch}>
                <div><HeaderPreview onSearchClick={handleSearchClick}/></div>
                <div>
                    {
                        movies && movies.map(value => <MovieListCard key={value.id} movie={value}/>)
                    }
                </div>
                <div>
                    <Pagination  onPageChange={handlePageChange}/>
                </div>
            </div>

            <Outlet/>
        </div>
    );

}

export {MovieList};
