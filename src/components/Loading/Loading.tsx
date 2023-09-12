import styles from './Loading.module.css';
import {useAppSelector} from "../../hooks";
import css from "../HeaderPreview/HeaderPreview.module.css";

export const Loading = () => {
    const {style} = useAppSelector(state => state.movieReducer);

    return (
        <div className={`${css.loading} ${style ? css.loadingLight : css.loadingDark}`}>
            Loading...
        </div>
    );
}
