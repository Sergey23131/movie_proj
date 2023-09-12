import React, {FC, useState, useEffect} from "react";
import {useAppSelector} from "../../hooks";

import {SearchPanel} from "../SearchPanel";

import css from './HeaderPreview.module.css';


interface IProps {
    onSearchClick: (value: string) => void;
}

interface IProps {
    onSearchClick: (value: string) => void;
}

const HeaderPreview: FC<IProps> = ({onSearchClick}) => {
    const {style} = useAppSelector(state => state.movieReducer);

    const [currentImage, setCurrentImage] = useState(0);
    const images = [
        '/images/img.png',
        '/images/img_1.png',
        '/images/img_2.png',
        // Добавьте дополнительные изображения
    ];

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentImage((prevImage) => (prevImage + 1) % images.length);
        }, 5000);

        return () => clearInterval(interval);
    }, []);

    const handlePrevImage = () => {
        setCurrentImage((prevImage) => (prevImage - 1 + images.length) % images.length);
    };

    const handleNextImage = () => {
        setCurrentImage((prevImage) => (prevImage + 1) % images.length);
    };

    return (
        <div className={`${css.HeaderPreview} ${style ? css.HeaderPreviewLight : css.HeaderPreviewDark}`}>
            {images.map((image, index) => (
                <img
                    key={index}
                    src={image}
                    alt="background_Photo"
                    className={currentImage === index ? `${css.active}` : css.fade}
                />
            ))}
            <div className={css.Caption}>
                <p className={css.CaptionText}>FIND YOUR FAVORITE MOVIE NOW</p>
                {/* Добавьте класс SearchPanel здесь */}
                <div className={css.SearchPanel}>
                    <SearchPanel onSearchClick={onSearchClick}/>
                </div>
            </div>
        </div>
    );
}

export {HeaderPreview};
