import {axiosService} from "./axios.service";
import {urls} from "../constants";
import {IRes} from "../types";

const genresService = {
    getAll: () => axiosService.get(urls.genres.genres),
}

export {
    genresService
}
