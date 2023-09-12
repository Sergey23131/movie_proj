import css from './GenresList.module.css'
import {useAppSelector} from "../../hooks";
import {FC} from "react";
import {IGenres} from "../../interfaces";

interface IProps {
    genre: IGenres;
    onGenreClick: (genreId: number) => void;
}


const GenresList: FC<IProps> = ({genre, onGenreClick}) => {
    const {style} = useAppSelector(state => state.movieReducer);
    const {id, name} = genre;

    const genreFilter = () => {
        onGenreClick(id); // Вызываем функцию с айди жанра
    };

    return (
        <div className={css.GenresListWrapper}>
            <div onClick={genreFilter} className={`${css.GenresListName} ${style ? css.GenresListNameLight : css.GenresListNameDark}`}>{name}</div>
        </div>
    );
};

export {GenresList};
