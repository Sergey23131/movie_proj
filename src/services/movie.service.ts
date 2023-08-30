import {IRes} from '../types';
import {axiosService} from './axios.service';
import { urls } from '../constants';


const movieService = {
   // getAll: (): IRes<IMovie[]> => axiosService.get(urls.movies.movies),
    getAll: () => axiosService.get(urls.movies.movies),
}

export {
    movieService
}
