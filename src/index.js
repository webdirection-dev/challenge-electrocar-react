import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from "react-redux";
import store from './store';
import './index.css';
import './sass/index.scss';
import App from './components/app';

ReactDOM.render(
    <React.StrictMode>
        <Provider store={store}>
            <App />
        </Provider>
    </React.StrictMode>,
    document.getElementById('root')
);