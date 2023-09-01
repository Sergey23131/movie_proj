import {createAsyncThunk, createSlice, isFulfilled, isRejectedWithValue} from '@reduxjs/toolkit';
import {AxiosError} from 'axios';

import {IGenres, IError} from '../../interfaces';
import {genresService} from '../../services';

interface IState {
    genres: IGenres[],
    errors: IError,
}

const initialState: IState = {
    genres: [],
    errors: null,

};


const getAll = createAsyncThunk<IGenres[], void>(
    'genreSlice/getAll',
    async (_, {rejectWithValue}) => {
        try {
            const {data} = await genresService.getAll();
            return data
        } catch (e) {
            const err = e as AxiosError
            return rejectWithValue(err.response.data)
        }
    }
)

const slice = createSlice({
    name: 'genreSlice',
    initialState,
    reducers: {
        /* setCarForUpdate: (state, action) => {
             state.carForUpdate = action.payload
         }*/
    },

    extraReducers: builder =>
        builder
            .addCase(getAll.fulfilled, (state, action) => {
                state.genres = action.payload
            })
            .addMatcher(isFulfilled(), state => {
                state.errors = null
            })
            .addMatcher(isRejectedWithValue(), (state, action) => {
                state.errors = action.payload
            })
});

const {actions, reducer: genresReducer} = slice;

const genresActions = {
    ...actions,
    getAll,

}

export {
    genresActions,
    genresReducer
}
