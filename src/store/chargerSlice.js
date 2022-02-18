import {createSlice, createAsyncThunk} from "@reduxjs/toolkit";
import PointsDb from "../db/pointsDb";
import StatesDb from "../db/statesDb";
import SessionsDb from "../db/sessionsDb";
import store from "./index";

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
            const response = await fetch( `${_path}form`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json;charset=utf-8'
                },
                body: JSON.stringify(user)
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

        users: [
            {
                id: 1,
                name: 'Александр',
                surname: 'Константиновский'
            }
        ],

        isInput: '',

        sessionsData: {payload:[]},
        pointsData: {payload:[]},
        statusesData: {payload:[]},

        isToggleNavbar: true,
        isToggleDesktop: false,
        toggleModal: false,

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
        counterAllSelectPoints: 0,

        status_idsParams: [],
        counterStatusSelectStatus: 0,
        counterAllSelectStatus: 0,
        //тестовые данные
        sessionsDbTest: SessionsDb,
        pointsDbTest: transformLocalDb(PointsDb),
        statusDbTest: transformLocalDb(StatesDb),
    },

    reducers: {
        changeInput(state, action) {
            state.isInput = action.payload.input
        },

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

        pushStatusParam(state, action) {
            const status_ids = action.payload.status_ids
            let arr = [...state.status_idsParams]

            if (!state.status_idsParams.includes(status_ids)) arr.push(status_ids)
            else arr = state.status_idsParams.filter(item => item !== status_ids)

            state.status_idsParams = arr
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

        transformLocalStatus(state, action) {
            const arr = state.statusDbTest.payload.map(item => {

                if (item.id === action.payload.status_ids) {
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

            state.counterStatusSelectStatus = count
            state.statusDbTest.payload = arr
        },

        filterLocal(state) {
            let sessions = SessionsDb.payload

            if (state.counterPointsSelectStatus === 0 && state.counterStatusSelectStatus === 0) {
                state.counterAllSelectStatus = 0
                state.counterAllSelectPoints = 0
                state.sessionsDbTest = SessionsDb
            }

            if (state.counterPointsSelectStatus > 0 && state.counterStatusSelectStatus === 0) {
                const filterArr = state.pointsDbTest.payload.filter(item => item.selectStatus)

                const arrOut = []

                for (let i = 0; i < sessions.length; i++) {
                    for (let j = 0; j < filterArr.length; j++) {
                        if (sessions[i].point_id === filterArr[j].id) {
                            arrOut.push(sessions[i])
                        }
                    }
                }

                state.counterAllSelectPoints = arrOut.length
                state.counterAllSelectStatus = 0

                state.sessionsDbTest.payload = arrOut.sort((a, b) => a.point_id - b.point_id)
            }

            if (state.counterPointsSelectStatus === 0 && state.counterStatusSelectStatus > 0) {
                const filterArr = state.statusDbTest.payload.filter(item => item.selectStatus)

                const arrOut = []

                for (let i = 0; i < sessions.length; i++) {
                    for (let j = 0; j < filterArr.length; j++) {
                        if (sessions[i].state_id === filterArr[j].id) {
                            arrOut.push(sessions[i])
                        }
                    }
                }

                state.counterAllSelectPoints = 0
                state.counterAllSelectStatus = arrOut.length

                state.sessionsDbTest.payload = arrOut
            }

            if (state.counterPointsSelectStatus > 0 && state.counterStatusSelectStatus > 0) {
                const filterArr = state.pointsDbTest.payload.filter(item => item.selectStatus)
                const filterStatus = state.statusDbTest.payload.filter(item => item.selectStatus)

                const arrOut = []
                const arrWithStatus = []

                for (let i = 0; i < sessions.length; i++) {
                    for (let j = 0; j < filterArr.length; j++) {
                        if (sessions[i].point_id === filterArr[j].id) {
                            arrOut.push(sessions[i])
                        }
                    }
                }

                const arrWithPoints = arrOut.sort((a, b) => a.point_id - b.point_id)

                for (let i = 0; i < arrWithPoints.length; i++) {
                    for (let j = 0; j < filterStatus.length; j++) {
                        if (arrWithPoints[i].state_id === filterStatus[j].id) {
                            arrWithStatus.push(arrWithPoints[i])
                        }
                    }
                }

                state.counterAllSelectStatus = arrWithStatus.length
                state.counterAllSelectPoints = arrWithPoints.length

                state.sessionsDbTest.payload = arrWithStatus
            }
        },

        toggleModalWindow(state) {
            state.toggleModal = !state.toggleModal
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
    changeInput,
    toggleNavbar,
    toggleDesktop,
    showWarning,
    pushPointsParam,
    pushStatusParam,
    transformLocalPoints,
    transformLocalStatus,
    filterLocal,
    toggleModalWindow,
} = chargerSlice.actions

export default chargerSlice.reducer