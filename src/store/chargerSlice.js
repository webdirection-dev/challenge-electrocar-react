import {createSlice} from "@reduxjs/toolkit";

const chargerSlice = createSlice({
    name: 'charger',
    initialState: {
        sessions: [],
        statuses: [],
        locations: [],

        isToggleNavbar: true,
        isToggleDesktop: true
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
    }
})

export const {
    toggleNavbar,
    toggleDesktop,
    showWarning
} = chargerSlice.actions

export default chargerSlice.reducer