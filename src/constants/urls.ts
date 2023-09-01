const baseURL = 'https://api.themoviedb.org/3/'

const movies = 'discover/movie';
const genres= '/genre/movie/list?language=en';
const urls = {
    movies: {
        movies,
        byId: (id: number): string => `/movie/${id}?append_to_response=videos`,

    },
    genres:{
        genres
    }
}

export {
    baseURL,
    urls
}
