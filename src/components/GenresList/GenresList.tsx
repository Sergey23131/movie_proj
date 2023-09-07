import css from './GenresList.module.css'
import {useAppDispatch, useAppSelector} from "../../hooks";
import {FC} from "react";
import {IGenres, IMovie} from "../../interfaces";

interface IProps {
    genre: IGenres;
    onGenreClick: (genreId: number) => void;
}


const GenresList: FC<IProps> = ({genre, onGenreClick}) => {
    const {id, name} = genre;

    const genreFilter = () => {
        onGenreClick(id); // Вызываем функцию с айди жанра
    };

    return (
        <div className={css.GenresListWrapper}>
            <div onClick={genreFilter} className={css.GenresListName}>{name}</div>
        </div>
    );
};

export {GenresList};
