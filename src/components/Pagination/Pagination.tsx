import React, {FC} from "react";
import css from './Pagination.module.css';
import {useAppSelector} from "../../hooks";


interface IProps {
    onPageChange: (page: number) => void;
}

const Pagination: FC<IProps> = ({onPageChange}) => {
    const {page, total_pages, style} = useAppSelector(state => state.movieReducer);

    // Вычисляем начальную и конечную страницу для показа
    let startPage: number;
    let endPage: number;
    if (page <= 3) {
        // Если текущая страница <= 3, показываем первые 3 и последние 10
        startPage = 1;
        endPage = Math.min(total_pages, 10);
    } else if (page >= total_pages - 3) {
        // Если текущая страница >= (total_pages - 3), показываем последние 3 и первые 10
        startPage = Math.max(1, total_pages - 9);
        endPage = total_pages;
    } else {
        // Иначе, показываем текущую страницу и по 5 страниц в каждую сторону
        startPage = page - 5;
        endPage = page + 5;
    }

    // Генерируем список страниц для отображения
    const pages = Array.from({length: endPage - startPage + 1}, (_, i) => startPage + i);

    return (
        <div className={`${css.pagination} ${style ? css.paginationLight : css.paginationDark}`}>
            <button onClick={() => onPageChange(page - 1)} disabled={page === 1} className={css.paginationButton}>
                {"<<"}
            </button>
            {pages.map((pageNum) => (
                <button
                    key={pageNum}
                    onClick={() => onPageChange(pageNum)}
                    className={page === pageNum ? css.currentPage : ""}
                >
                    {pageNum}
                </button>
            ))}
            <button
                onClick={() => onPageChange(page + 1)}
                disabled={page === total_pages}
            >
                {">>"}
            </button>
        </div>
    );
}

export {Pagination};
