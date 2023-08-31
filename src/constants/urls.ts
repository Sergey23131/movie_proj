const baseURL = 'https://api.themoviedb.org/3/'

const movies = 'discover/movie'
const urls = {
    movies: {
        movies,
        byId: (id: number): string => `/movie/${id}?append_to_response=videos`,

    }
}

export {
    baseURL,
    urls
}
