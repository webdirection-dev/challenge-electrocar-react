import {createSlice, createAsyncThunk} from "@reduxjs/toolkit";
import PointsDb from "../db/pointsDb";
import StatesDb from "../db/statesDb";
import SessionsDb from "../db/sessionsDb";

// const _path = 'https://jsonplaceholder.typicode.com/todos'
const _path = '???https://test-api.electrocars.tech/'

export const transformLocalDb = (data) => {
    return  {
        payload: data.payload.map(item => {
            return {...item, selectStatus: false}
        })
    }
}

export const fetchSessions = createAsyncThunk(
    'chargerReducer/fetchSessions',
    async function(_, {rejectWithValue}) {
        try {
            const response = await fetch( `${_path}sessions`, {
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
        sessionsData: {payload:[]},
        pointsData: {payload:[]},
        statusesData: {payload:[]},

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

        points_idsParams: [],
        counterPointsSelectStatus: 0,

        //тестовые данные
        sessionsDbTest: SessionsDb,
        pointsDbTest: transformLocalDb(PointsDb),
        statusDbTest: transformLocalDb(StatesDb),
    },

    reducers: {
        toggleNavbar(state) {
            state.isToggleNavbar = !state.isToggleNavbar
        },

        toggleDesktop(state) {
            state.isToggleDesktop = !state.isToggleDesktop
        },

        showWarning() {
            console.log('Handler missing!')
        },

        pushPointsParam(state, action) {
            const points_ids = action.payload.points_ids
            let arr = [...state.points_idsParams]

            if (!state.points_idsParams.includes(points_ids)) arr.push(points_ids)
            else arr = state.points_idsParams.filter(item => item !== points_ids)

            state.points_idsParams = arr
        },

        transformLocalPoints(state, action) {
            const arr = state.pointsDbTest.payload.map(item => {

                if (item.id === action.payload.points_ids) {
                    return {
                        ...item,
                        selectStatus: !item.selectStatus
                    }
                } else return item
            })

            let count = 0
            arr.forEach(item => {
                if (item.selectStatus) count += 1
            })

            state.counterPointsSelectStatus = count
            state.pointsDbTest.payload = arr
        },

        filterLocalPoints(state) {
            if (state.counterPointsSelectStatus > 0) {
                const sessions = SessionsDb.payload

                const filterArr = state.pointsDbTest.payload.filter(item => item.selectStatus)

                const arrOut = []

                for (let i = 0; i < sessions.length; i++) {
                    for (let j = 0; j < filterArr.length; j++) {
                        if (sessions[i].point_id === filterArr[j].id) {
                            arrOut.push(sessions[i])
                        }
                    }
                }

                state.sessionsDbTest.payload = arrOut.sort((a, b) => a.point_id - b.point_id)
            } else state.sessionsDbTest = SessionsDb

        }
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
    showWarning,
    pushPointsParam,
    transformLocalPoints,
    filterLocalPoints,
} = chargerSlice.actions

export default chargerSlice.reducer