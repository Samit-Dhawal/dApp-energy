import React from "react";
import { StrictMode } from 'react';
import ReactDom from 'react-dom';

import App from './App';

const root = document.getElementById('root');

ReactDom.render(
    <StrictMode>
        <App />
    </StrictMode>,
    root
);