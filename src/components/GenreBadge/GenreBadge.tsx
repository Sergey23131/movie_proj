import React, {Component, FC, useEffect} from 'react';
import {IMovie} from "../../interfaces";
import {useAppDispatch, useAppSelector} from "../../hooks";
import {genresActions} from "../../redux";

interface IProps {
    ganres: number[];
}


const GenreBadge: FC<IProps> = ({ganres}) =>{
    const {genres} = useAppSelector(state => state.genresReducer);
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(genresActions.getAll())
    }, [dispatch])


    return (
            <div>
                GenreBadge
            </div>
        );

}

export {GenreBadge};
