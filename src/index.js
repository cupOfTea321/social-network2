

import './index.css';

import reportWebVitals from './reportWebVitals';

// import store from "./Redux/store";

import React from "react";
import {BrowserRouter} from "react-router-dom";
import App from "./App";

import ReactDOM from "react-dom/client";
import store from "./Redux/redux_store";



const root = ReactDOM.createRoot(document.getElementById('root'));
export let rerenderTree = () => {
    root.render(

        <React.StrictMode>
            <BrowserRouter >

                <App store={store} />
            </BrowserRouter>
        </React.StrictMode>


    );
}
rerenderTree();
store.subscribe(rerenderTree)
// rerenderTree(store);


reportWebVitals();
