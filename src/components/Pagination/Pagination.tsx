import React, {FC, useEffect, useState} from "react";
import css from './Pagination.module.css';
import {useAppDispatch, useAppSelector} from "../../hooks";
import { useSelector } from "react-redux";
import {movieActions} from "../../redux";
import {IGenres} from "../../interfaces";

interface IProps {
    handlePrevPage: () => void;
    handleNextPage: () => void;
}


const Pagination: FC<IProps>  = ({handlePrevPage,handleNextPage}) => {
    const {page, total_pages} = useAppSelector(state => state.movieReducer);

    return (
        <div className="pagination">
            <button onClick={handlePrevPage} disabled={page === 1}>
                Предыдущая страница
            </button>
            <span className="current-page">{page}</span>
            <button onClick={handleNextPage} disabled={page === total_pages}>
                Следующая страница
            </button>
        </div>
    );

}

export {Pagination};
