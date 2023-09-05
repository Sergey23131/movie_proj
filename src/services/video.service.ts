import {axiosService} from "./axios.service";
import {urls} from "../constants";
import {IRes} from "../types";
import {IVideo} from "../interfaces";

const videoService = {
    getById: (id: number): IRes<IVideo> => axiosService.get(urls.video.byId(id))
}

export {
    videoService
}
