import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { ZEITUIProvider, CSSBaseline } from '@zeit-ui/react';

ReactDOM.render(
    <React.StrictMode>
        <ZEITUIProvider theme={{type: 'dark'}}>
            <CSSBaseline />
            <App />
        </ZEITUIProvider>
    </React.StrictMode>,
    document.getElementById('root')
);

serviceWorker.unregister();