import React, {Component, FC, useEffect} from 'react';
import {useAppDispatch, useAppSelector} from "../../hooks";
import {genresActions} from "../../redux";
import css from './GanreBadge.module.css'

interface IProps {
    genresId: number[];
}


const GenreBadge: FC<IProps> = ({genresId}) => {
    const {genres} = useAppSelector(state => state.genresReducer);
    const {style} = useAppSelector(state => state.movieReducer);

    const dispatch = useAppDispatch();


    const filteredGenres = genres.filter(genre => genresId.includes(genre.id));


    useEffect(() => {
        dispatch(genresActions.getAll())
    }, [dispatch])


    return (
        <div className={`${css.GenreBadgeWrapper} ${style ? css.GenreBadgeWrapperLight : css.GenreBadgeWrapperDark}`}>
            {filteredGenres && filteredGenres.map(genre => (
                <div key={genre.id} className={`${css.GenreBadgeName} ${style ? css.GenreBadgeNameLight : css.GenreBadgeNameDark}`}>
                    {genre.name}
                </div>

            ))}

        </div>
    );

}

export {GenreBadge};
