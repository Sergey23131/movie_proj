import {useAppDispatch, useAppSelector} from "../../hooks";
import {FC, useEffect, useState} from "react";
import {MovieListCard} from "../MoviesListCard";
import {Outlet} from "react-router-dom";
import {movieActions} from "../../redux";
import css from './MovieList.module.css';
import {GenresList} from "../GenresList";
import {HeaderPreview} from "../HeaderPreview";
import {Pagination} from "../Pagination";
import { Loading } from "../Loading";


const MovieList: FC = () => {
    const {movies, page, total_pages, style, isLoading} = useAppSelector(state => state.movieReducer);
    const {genres} = useAppSelector(state => state.genresReducer);
    const [genreId, setGenreId] = useState<number | null>(null);
    const [search, setSearch] = useState<string | null>(null);


    const dispatch = useAppDispatch();


    useEffect(() => {
        const pageStr = page.toString();

        if (search) {
            dispatch(movieActions.getBySearch({params: search, currentPage: pageStr}));
        } else if (genreId) {
            dispatch(movieActions.getByGenre({id: genreId, currentPage: pageStr}));
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

    const handlePageChange = (newPage: number) => {
        dispatch(movieActions.changePage(newPage));
    };

    return (
        <div className={css.movieListWrapper}>
            <div className={style ? css.movieGenresLight : css.movieGenresDark}>
                {
                    genres && genres.map(value => <GenresList key={value.id} genre={value}
                                                              onGenreClick={handleGenreClick}/>)
                }
            </div>
            <div className={css.movieListSearch}>
                <div><HeaderPreview onSearchClick={handleSearchClick}/></div>
                <div className={style ? css.moviesListContLight : css.moviesListContDark}>
                    {isLoading ? (
                        <Loading />
                    ) : (
                        movies.length > 0 ? (
                            movies.map((value) => <MovieListCard key={value.id} movie={value} />)
                        ) : (
                            <p className={css.warningSearch}>No data. You entered an incorrect movie name or the movie does not exist.</p>
                        )
                    )}
                </div>
                <div>
                    <Pagination onPageChange={handlePageChange}/>
                </div>
            </div>

            <Outlet/>
        </div>
    );

}

export {MovieList};
