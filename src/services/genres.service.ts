import {axiosService} from "./axios.service";
import {urls} from "../constants";

const genresService = {
    getAll: () => axiosService.get(urls.genres.genres),
}

export {
    genresService
}
