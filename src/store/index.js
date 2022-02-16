import {configureStore, combineReducers} from "@reduxjs/toolkit";
import chargerReducer from './chargerSlice';

// Для работы с LocalStorage
import {
    persistStore,
    persistReducer,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';

// Для нескольких reducers
const rootReducer = combineReducers({
    chargerReducer: chargerReducer
})

const persistConfig = {
    key: 'root',
    storage: storage,
    // blacklist: ['chargerReducer']
}

const persistedReducer = persistReducer(persistConfig, rootReducer)

const store = configureStore({
    reducer: persistedReducer,

    middleware: (getDefaultMiddleware) => getDefaultMiddleware({
        serializableCheck: {
            ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
        },
    }),
});

export const persistor = persistStore(store)

export default store