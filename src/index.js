

import './index.css';
import reportWebVitals from './reportWebVitals';
import React from "react";
import {BrowserRouter} from "react-router-dom";
import App from "./App";
import ReactDOM from "react-dom/client";
import store from "./Redux/redux_store";
import {Provider} from "./storeContext";



const root = ReactDOM.createRoot(document.getElementById('root'));
export let rerenderTree = () => {
    root.render(

        <React.StrictMode>
            <BrowserRouter >
                <Provider store={store}>
                    <App />
                </Provider>

            </BrowserRouter>
        </React.StrictMode>


    );
}
rerenderTree();
store.subscribe(rerenderTree)
// rerenderTree(store);


reportWebVitals();
