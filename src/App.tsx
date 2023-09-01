import React from 'react';
import './App.css';

import {Navigate, Route, Routes} from 'react-router-dom';

import {MainLayout} from './layouts';

import {MoviePage, UserPage} from "./pages";
import { MovieList } from './components';


const App = () => {

  return (
      <Routes>
          <Route path={'/'} element={<MainLayout/>}>
              <Route index element={<Navigate to={'movies'}/>}/>
              <Route path={'movies'} element={<MovieList/>}/>
              <Route path={'/movies/:id'} element={<MoviePage/>}/>
              <Route path={'/userPage'} element={<UserPage/>}/>



          </Route>
      </Routes>
  );
}

export {App};
