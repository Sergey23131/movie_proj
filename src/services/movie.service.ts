import {IRes} from '../types';
import {axiosService} from './axios.service';
import {urls} from '../constants';
import {IMovie} from "../interfaces";


const movieService = {
    // getAll: (): IRes<IMovie[]> => axiosService.get(urls.movies.movies),
    getAll: () => axiosService.get(urls.movies.movies),
    getById: (id: number): IRes<IMovie> => axiosService.get(urls.movies.byId(id))
}

export {
    movieService
}
