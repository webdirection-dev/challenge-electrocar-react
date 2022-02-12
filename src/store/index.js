import {configureStore} from "@reduxjs/toolkit";
import chargerReducer from './chargerSlice';

export default configureStore({
    reducer: {
        chargerReducer: chargerReducer
    }
});