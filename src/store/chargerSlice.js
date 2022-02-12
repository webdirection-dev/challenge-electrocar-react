import {createSlice, createAsyncThunk} from "@reduxjs/toolkit";

// const _path = 'https://jsonplaceholder.typicode.com/todos'
const _path = '???https://test-api.electrocars.tech/'

export const fetchSessions = createAsyncThunk(
    'chargerReducer/fetchSessions',
    async function(_, {rejectWithValue}) {
        try {
            const response = await fetch( `${_path}states`, {
                headers: {
                    // 'Content-Type': 'application/json;charset=utf-8',
                    // 'Accept': '*/*',
                    // 'Accept-Encoding': 'gzip, deflate, br',
                    // 'Connection': 'keep-alive'
                }
            });

            if (!response.ok) {
                throw new Error('ServerError!')
            }

            const data = await response.json();

            return data;
        } catch (error) {
            return rejectWithValue(error.message)
        }
    }
)

export const fetchPoints = createAsyncThunk(
    'chargerReducer/fetchPoints',

    async function(_, {rejectWithValue}) {
        try {
            const response = await fetch( `${_path}points`);

            if (!response.ok) {
                throw new Error('ServerError!')
            }

            const data = await response.json();

            return data;
        } catch (error) {
            return rejectWithValue(error.message)
        }
    }
)

export const fetchStatuses = createAsyncThunk(
    'chargerReducer/fetchStatuses',

    async function(_, {rejectWithValue}) {
        try {
            const response = await fetch( `${_path}states`);

            if (!response.ok) {
                throw new Error('ServerError!')
            }

            const data = await response.json();

            return data;
        } catch (error) {
            return rejectWithValue(error.message)
        }
    }
)

export const addNewForm = createAsyncThunk(
    'chargerReducer/addNewForm',
    async function(user, {rejectWithValue}) {
        try {
            const backCall = {
                name: 'string',
                phone: 'string',
                callback_time: "number (unix time)"
            }

            const response = await fetch( `${_path}form`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json;charset=utf-8'
                },
                body: JSON.stringify(backCall)
            });

            if (!response.ok) {
                throw new Error('Can not add back call. ServerError.')
            }
        } catch (error) {
            return rejectWithValue(error.message)
        }
    }
)

const chargerSlice = createSlice({
    name: 'charger',
    initialState: {
        sessionsData: [],
        pointsData: [],
        statusesData: [],

        isToggleNavbar: true,
        isToggleDesktop: true,

        responseStatus: null,
        responseError: null,

        responseStatusPoints: null,
        responseErrorPoints: null,

        responseStatusStatuses: null,
        responseErrorStatuses: null,

        responseStatusBackCall: null,
        responseErrorBackCall: null,
    },

    reducers: {
        toggleNavbar(state, action) {
            state.isToggleNavbar = !state.isToggleNavbar
        },

        toggleDesktop(state, action) {
            state.isToggleDesktop = !state.isToggleDesktop
        },

        showWarning(state, action) {
            console.log('Handler missing!')
        },
    },

    extraReducers: {
        // Pending
        [fetchSessions.pending]: (state, action) => {
            state.responseStatus = 'loading'
            state.responseError = null
        },

        [fetchPoints.pending]: (state, action) => {
            state.responseStatusPoints = 'loading'
            state.responseErrorPoints = null
        },

        [fetchStatuses.pending]: (state, action) => {
            state.responseStatusStatuses = 'loading'
            state.responseErrorStatuses = null
        },

        // Fulfilled
        [fetchSessions.fulfilled]: (state, action) => {
            state.responseStatus = 'resolved'
            state.sessionsData = action.payload
            state.responseError = null
        },

        [fetchPoints.fulfilled]: (state, action) => {
            state.responseStatusPoints = 'resolved'
            state.pointsData = action.payload
            state.responseErrorPoints = null
        },

        [fetchStatuses.fulfilled]: (state, action) => {
            state.responseStatusStatuses = 'resolved'
            state.statusesData = action.payload
            state.responseErrorStatuses = null
        },

        // Rejected
        [fetchSessions.rejected]: (state, action) => {
            state.responseStatus = 'rejected'
            state.responseError = action.payload
        },

        [fetchPoints.rejected]: (state, action) => {
            state.responseStatusPoints = 'rejected'
            state.responseErrorPoints = action.payload
        },

        [fetchStatuses.rejected]: (state, action) => {
            state.responseStatusStatuses = 'rejected'
            state.responseErrorStatuses = action.payload
        },

        [addNewForm.rejected]: (state, action) => {
            state.responseStatusBackCall = 'rejected'
            state.responseErrorBackCall = action.payload
        },
    }
})

export const {
    toggleNavbar,
    toggleDesktop,
    showWarning
} = chargerSlice.actions

export default chargerSlice.reducer