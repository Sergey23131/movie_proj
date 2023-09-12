import React, {FC, useState} from "react";

import css from './SearchPanel.module.css'


interface IProps {
    onSearchClick: (value: string) => void;
}

const SearchPanel: FC<IProps> = ({onSearchClick}) => {

    const [searchText, setSearchText] = useState("");

    const getMoviesFromDB = async (e: any) => {
        e.preventDefault();
        onSearchClick(searchText)
    };

    return (
        <div className={css.moviePage}>
            <div>
                <form onSubmit={getMoviesFromDB}>
                    <input
                        type="text"
                        value={searchText}
                        onChange={(e) => setSearchText(e.target.value)}
                        className={css.searchInput}
                    />
                    <button type="submit" className={css.searchButton}>Search</button>
                </form>
            </div>
        </div>
    );
};

export {SearchPanel};
