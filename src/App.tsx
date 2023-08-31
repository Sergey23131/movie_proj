import React from 'react';
import './App.css';


import {FC, useEffect} from 'react';

import {movieActions} from "./redux/slice";
import {useAppDispatch, useAppSelector} from './hooks';


const App: FC = () => {
    const {movies, trigger} = useAppSelector(state => state.movieReducer);
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(movieActions.getAll())
    }, [dispatch, trigger])

    console.log(movies)

  return (
    <div className="App">
      App
    </div>
  );
}

export {App};
