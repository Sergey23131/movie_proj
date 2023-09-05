import { useState } from "react";
import {Link} from "react-router-dom";
import {SearchPanel} from "../SearchPanel";
import css from './Header.module.css';


const Header = () => {
    const [isLightMode, setIsLightMode] = useState(true);

    const toggleTheme = () => {
        setIsLightMode(prevMode => !prevMode);
    };

    const headerClassName = isLightMode ? css.light : css.dark;

    return (
        <div className={`${css.headerWrapper} ${headerClassName}`}>
            <Link to="movies" className={css.logoLink}>
                KOMO FILMS
            </Link>
            <button className={css.lightModeButton} onClick={toggleTheme}>
                {isLightMode ? 'Dark Mode' : 'Light Mode'}
            </button>
            <SearchPanel />
            <Link to="userPage" className={css.userLink}>
                <img src="" alt="userPage" className={css.userImage} />
            </Link>
        </div>
    );
};

export { Header };
