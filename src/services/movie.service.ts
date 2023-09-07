import {IRes} from '../types';
import {axiosService} from './axios.service';
import {urls} from '../constants';
import {IMovie} from "../interfaces";


const movieService = {
    // getAll: (): IRes<IMovie[]> => axiosService.get(urls.movies.movies),
    getAll: (currentPage: string) => axiosService.get(urls.movies.movies(currentPage)),
    getById: (id: number): IRes<IMovie> => axiosService.get(urls.movies.byId(id)),
    getByGenre: (genreId: number, currentPage: string) => axiosService.get(urls.movies.byGenre(genreId, currentPage)),
    getBySearch: (params: string, currentPage: string) => axiosService.get(urls.movies.bySearch(params, currentPage))
}

export {
    movieService
}
