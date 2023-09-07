import {useState} from "react";
import {Link} from "react-router-dom";
import {SearchPanel} from "../SearchPanel";
import css from './Header.module.css';


const Header = () => {
    const [isLightMode, setIsLightMode] = useState(true);

    const toggleTheme = () => {
        setIsLightMode(prevMode => !prevMode);
    };
    const reloadPage = () => {
        window.location.href = "/movies";
    };

    const headerClassName = isLightMode ? css.light : css.dark;

    return (
        <div className={`${css.headerWrapper} ${headerClassName}`}>
            <div className={css.logoLink} onClick={reloadPage}>KOMO FILMS</div>

            <div onClick={reloadPage}>
                Movies List
            </div>
            <button className={css.lightModeButton} onClick={toggleTheme}>
                {isLightMode ? 'Dark Mode' : 'Light Mode'}
            </button>
            <Link to="userPage" className={css.userLink}>
                <img src="" alt="userPage" className={css.userImage}/>
            </Link>
        </div>
    );
};

export {Header};
