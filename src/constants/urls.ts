const baseURL = 'https://api.themoviedb.org/3/'

const movies = 'discover/movie';
const genres= '/genre/movie/list?language=en';
const urls = {
    movies: {
        movies,
        byId: (id: number): string => `/movie/${id}?append_to_response=videos`,
        byGenre: (genreId:number):string=>`/discover/movie?with_genres=${genreId}`
    },
    genres:{
        genres
    },
    video:{
        byId: (id: number): string => `movie/${id}/videos?language=en-US`,

    }
}

export {
    baseURL,
    urls
}
