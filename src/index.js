import React from 'react';
import { hydrate } from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';

import App from './components/App';
import reportWebVitals from './reportWebVitals';
import "./styles/index.scss";

// eslint-disable-next-line react-hooks/exhaustive-deps
window.onload = () => {
    hydrate(
            <Router>
                <App />
            </Router>,
        document.getElementById('root')
    );
};
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
