import React from "react";

const SearchPanel = () => {
    const getMoviesFromDB = async (e:any) => {
        e.preventDefault();

       /* const query = queryString.parse(location.search);
        query.query = searchValue;
        query.page = '1';

        if(!searchValue) delete query.query;

        history.push('/movies?' + queryString.stringify(query));
        setSearchValue('');*/
    };

    return (
        <div>
            <div>
                <form onSubmit={getMoviesFromDB}>
                    <input/>
                </form>


            </div>
        </div>
    );

}

export {SearchPanel};
