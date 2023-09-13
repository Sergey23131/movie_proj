import {Link} from "react-router-dom";
import {useAppDispatch, useAppSelector} from "../../hooks";
import {movieActions} from "../../redux";

import css from './Header.module.css';


const Header = () => {
    const {style} = useAppSelector(state => state.movieReducer);

    const dispatch = useAppDispatch();

    const toggleTheme = () => {
        dispatch(movieActions.stylePage());
    };
    const reloadPage = () => {
        window.location.href = "/movies";

    };


    return (
        <div className={`${css.headerWrapper} ${style ? css.headerWrapperLight : css.headerWrapperDark}`}>
            <div className={`${css.logoLink} ${style ? css.logoLinkLight : css.logoLinkDark}`} onClick={reloadPage}>KOMO
                FILMS
            </div>
            <div className={css.moviesList} onClick={reloadPage}>
                Movies List
            </div>
            <button className={`${css.lightModeButton} ${style ? css.lightModeButtonLight : css.lightModeButtonDark}`}
                    onClick={toggleTheme}>
                {style ? 'Dark Mode' : 'Light Mode'}
            </button>
            <div className={css.headerImg}>
                <Link to="/movies/userPage" className={css.userLink}>
                    <img src="/images/img_3.png" alt="userPage" className={css.userImage}/>
                </Link>
            </div>

        </div>
    );
};

export {Header};
