import {createAsyncThunk, createSlice, isFulfilled, isRejectedWithValue} from '@reduxjs/toolkit';
import {AxiosError} from 'axios';

import {IMovie, IError} from '../../interfaces';
import { movieService} from '../../services';

interface IState {
    movies: IMovie[],
    errors: IError,
    trigger: boolean,

}

const initialState: IState = {
    movies: [],
    errors: null,
    trigger: false

};


const getAll = createAsyncThunk<IMovie[], void>(
    'movieSlice/getAll',
    async (_, {rejectWithValue}) => {
        try {
            const {data} = await movieService.getAll();
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

}

export {
    movieActions,
    movieReducer
}
