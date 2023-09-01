import {IError, IMovie} from "../../interfaces";
import {createAsyncThunk, createSlice, isFulfilled, isRejectedWithValue} from "@reduxjs/toolkit";
import {movieService} from "../../services";
import {AxiosError} from "axios";

interface IState {
    movies: IMovie[],
    movie: IMovie | null,
    errors: IError,
    trigger: boolean,
    page: number,
    total_pages: number

}

const initialState: IState = {
    movies: [],
    movie: null,
    errors: null,
    trigger: false,
    page: 1,
    total_pages: 1

};


const getAll = createAsyncThunk<IMovie[], void>(
    'movieSlice/getAll',
    async (_, {rejectWithValue}) => {
        try {
            const {data} = await movieService.getAll();
            const {results} = data;
            return results
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


const slice = createSlice({
    name: 'movieSlice',
    initialState,
    reducers: {
        /* setCarForUpdate: (state, action) => {
             state.carForUpdate = action.payload
         }*/
    },

    extraReducers: builder =>
        builder
            .addCase(getAll.fulfilled, (state, action) => {
                state.movies = action.payload
            })
            .addCase(getByID.fulfilled, (state, action) => {
                state.movie = action.payload
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
    getByID

}

export {
    movieActions,
    movieReducer
}
