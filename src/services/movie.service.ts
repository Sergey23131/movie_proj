import {IRes} from '../types';
import {axiosService} from './axios.service';
import {urls} from '../constants';
import {IMovie} from "../interfaces";


const movieService = {
    // getAll: (): IRes<IMovie[]> => axiosService.get(urls.movies.movies),
    getAll: (currentPage: string) => axiosService.get(urls.movies.movies(currentPage)),
    getById: (id: number): IRes<IMovie> => axiosService.get(urls.movies.byId(id)),
    getByGenre: (genreId: number) => axiosService.get(urls.movies.byGenre(genreId)),
    getBySearch: (params: string) => axiosService.get(urls.movies.bySearch(params))
}

export {
    movieService
}
