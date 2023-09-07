const baseURL = 'https://api.themoviedb.org/3/'

const genres = '/genre/movie/list?language=en';
const urls = {
    movies: {
        movies: (currentPage: string) => `discover/movie?page=${currentPage}`,
        byId: (id: number): string => `/movie/${id}?append_to_response=videos`,
        byGenre: (genreId: number, currentPage: string): string => `/discover/movie?with_genres=${genreId}&page=${currentPage}`,
        bySearch: (params: string, currentPage: string): string => `/search/movie?query=${params}&page=${currentPage}`
    },
    genres: {
        genres
    },
    video: {
        byId: (id: number): string => `movie/${id}/videos?language=en-US`,

    }
}

export {
    baseURL,
    urls
}
