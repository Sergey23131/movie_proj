import React, {Component, FC, useEffect} from 'react';
import {useAppDispatch, useAppSelector} from "../../hooks";
import {genresActions} from "../../redux";

interface IProps {
    genresId: number[];
}


const GenreBadge: FC<IProps> = ({genresId}) => {
    const {genres} = useAppSelector(state => state.genresReducer);
    const dispatch = useAppDispatch();


    const filteredGenres = genres.filter(genre => genresId.includes(genre.id));


    useEffect(() => {
        dispatch(genresActions.getAll())
    }, [dispatch])


    return (
        <div>
            {filteredGenres && filteredGenres.map(genre => (
                <div key={genre.id}>
                    {genre.name}
                </div>
            ))}

        </div>
    );

}

export {GenreBadge};
