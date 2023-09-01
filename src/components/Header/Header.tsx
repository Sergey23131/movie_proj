import {Link} from "react-router-dom";
import {SearchPanel} from "../SearchPanel";
// @ts-ignore
import css from './Header.module.css';


const Header = () => {


    return (
        <div className={css.headerWrapper}>
            <Link to={'movies'} >KOMO FILMS</Link>
            <Link to={'userPage'}><img src="" alt="userPage"/></Link>
            <SearchPanel/>
            <button>Light Mode</button>

        </div>
    );

}

export {Header};
