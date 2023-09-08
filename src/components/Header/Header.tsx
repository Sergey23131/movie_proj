import {useState} from "react";
import {Link} from "react-router-dom";
import {SearchPanel} from "../SearchPanel";
import css from './Header.module.css';
import {useAppDispatch, useAppSelector} from "../../hooks";
import {movieActions} from "../../redux";


const Header = () => {
    const {style} = useAppSelector(state => state.movieReducer);
// МОЖНО В СТИЛЯХ  сделать как тут что бы уменьшить количество кода в ксс
    const dispatch = useAppDispatch();

    const toggleTheme = () => {
        dispatch(movieActions.stylePage());
    };
    const reloadPage = () => {
        window.location.href = "/movies";

    };


    return (
        <div className={`${css.headerWrapper} ${style ? css.light : css.dark}`}>
            <div className={style ? css.logoLinkLight : css.logoLinkDark} onClick={reloadPage}>KOMO FILMS</div>
            <div className={css.moviesList} onClick={reloadPage}>
                Movies List
            </div>
            <button className={style ? css.lightModeButtonLight : css.lightModeButtonDark} onClick={toggleTheme}>
                {style ? 'Dark Mode' : 'Light Mode'}
            </button>
            <div className={css.headerImg}>
                <Link to="userPage" className={css.userLink}>
                    <img src="/images/img_3.png" alt="userPage" className={css.userImage}/>
                </Link>
            </div>

        </div>
    );
};

export {Header};
