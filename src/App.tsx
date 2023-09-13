import React from 'react';
import css from './App.module.css';

import {Navigate, Route, Routes} from 'react-router-dom';

import {MainLayout} from './layouts';

import {MoviePage, UserPage} from "./pages";
import {MovieList} from './components';
import {useAppSelector} from "./hooks";


const App = () => {
    const {style} = useAppSelector(state => state.movieReducer);


    return (
        <div className={style ? css.AppMainLight : css.AppMainDark}>
            <Routes>
                <Route path={'/'} element={<MainLayout/>}>
                    <Route index element={<Navigate to={'movies'}/>}/>
                    <Route path={'movies'} element={<MovieList/>}/>
                    <Route path={'/movies/:id'} element={<MoviePage/>}/>
                    <Route path={'/userPage'} element={<UserPage/>}/>


                </Route>
            </Routes>
        </div>
    );
}

export {App};
