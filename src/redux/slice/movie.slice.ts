import {createAsyncThunk, createSlice, isFulfilled, isRejectedWithValue} from "@reduxjs/toolkit";
import {movieService} from "../../services";
import {videoService} from "../../services";

import {AxiosError} from "axios";

import {IError, IMovie,IVideo} from "../../interfaces";



interface IState {
    movies: IMovie[],
    movie: IMovie | null,
    movieVideo: IVideo,
    errors: IError,
    style: boolean,
    page: number,
    total_pages: number,
    isLoading: boolean,

}

const initialState: IState = {
    movies: [],
    movieVideo: null,
    movie: null,
    errors: null,
    style: false,
    page: 1,
    total_pages: 1,
    isLoading: false,

};


const getAll = createAsyncThunk<{ movies: IMovie[], total_pages: number }, string>(
    'movieSlice/getAll',
    async (currentPage, {rejectWithValue}) => {
        try {
            const {data} = await movieService.getAll(currentPage);
            const {results, total_pages} = data;
            return {movies: results, total_pages};
        } catch (e) {
            const err = e as AxiosError;
            return rejectWithValue(err.response.data);
        }
    }
);

const getBySearch = createAsyncThunk<{ movies: IMovie[], total_pages: number }, { params: string, currentPage: string }>(
    'movieSlice/getBySearch',
    async ({params, currentPage}, {rejectWithValue}) => {
        try {
            const {data} = await movieService.getBySearch(params, currentPage);
            const {results, total_pages} = data;
            return {movies: results, total_pages};
        } catch (e) {
            const err = e as AxiosError;
            return rejectWithValue(err.response.data);
        }
    }
);


const getByGenre = createAsyncThunk<{ movies: IMovie[], total_pages: number }, { id: number, currentPage: string }>(
    'movieSlice/getByGenre',
    async ({id, currentPage}, {rejectWithValue}) => {
        try {
            const {data} = await movieService.getByGenre(id, currentPage);
            const {results, total_pages} = data;
            return {movies: results, total_pages};
        } catch (e) {
            const err = e as AxiosError
            return rejectWithValue(err.response.data)
        }
    }
)

const getByID = createAsyncThunk<IMovie, { id: number }>(
    'movieSlice/getById',
    async ({id}, {rejectWithValue}) => {
        try {
            const {data} = await movieService.getById(id);
            return data
        } catch (e) {
            const err = e as AxiosError
            return rejectWithValue(err.response.data)
        }
    }
)


const getVideo = createAsyncThunk<IVideo, { id: number }>(
    'movieSlice/getVideo',
    async ({id}, {rejectWithValue}) => {
        try {
            const {data} = await videoService.getById(id);
            return data
        } catch (e) {
            const err = e as AxiosError
            return rejectWithValue(err.response.data)
        }
    }
)


const slice = createSlice({
    name: 'movieSlice',
    initialState,
    reducers: {
        changePage: (state, action) => {
            state.page = action.payload;
        },
        nextPage: (state) => {
            state.page += 1;
        },
        prevPage: (state) => {
            state.page = Math.max(1, state.page - 1);
        },
        stylePage: (state): void => {
            if (state.style === true) {
                state.style = false;
            } else {
                state.style = true;

            }
        },

    },

    extraReducers: builder =>
        builder
            .addCase(getAll.pending, (state) => {
                state.isLoading = true; // Начало загрузки
            })
            .addCase(getAll.fulfilled, (state, action) => {
                state.movies = action.payload.movies;
                state.total_pages = action.payload.total_pages;
                state.isLoading = false; // Конец загрузки
            })
            .addCase(getAll.rejected, (state, action) => {
                state.errors = action.payload;
                state.isLoading = false; // Конец загрузки с ошибкой
            })

            .addCase(getByGenre.fulfilled, (state, action) => {
                state.movies = action.payload.movies;
                state.total_pages = action.payload.total_pages;
            })
            .addCase(getBySearch.fulfilled, (state, action) => {
                state.movies = action.payload.movies;
                state.total_pages = action.payload.total_pages;
            })
            .addCase(getByID.fulfilled, (state, action) => {
                state.movie = action.payload
            })
            .addCase(getVideo.fulfilled, (state, action) => {
                state.movieVideo = action.payload
            })
            .addMatcher(isFulfilled(), state => {
                state.errors = null
            })

            .addMatcher(isRejectedWithValue(), (state, action) => {
                state.errors = action.payload
            })
});

const {actions, reducer: movieReducer} = slice;

const movieActions = {
    ...actions,
    getAll,
    getByID,
    getVideo,
    getByGenre,
    getBySearch


}

export {
    movieActions,
    movieReducer
}
