import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {createTheme, ThemeProvider} from "@material-ui/core";
import {grey, orange} from "@material-ui/core/colors";
import {Provider} from "react-redux";
import {store} from "./BLL/store";
import {HashRouter} from "react-router-dom";


const theme = createTheme({
    palette: {
        primary: {
            main: grey[900]
        },
        secondary: {
            main: orange.A400
        },
    }
})

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);
root.render(
    <Provider store={store}>
        <ThemeProvider theme={theme}>
            <HashRouter>
                <App/>
            </HashRouter>
        </ThemeProvider>
    </Provider>,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
