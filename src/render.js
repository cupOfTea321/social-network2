import React from "react";
import {BrowserRouter} from "react-router-dom";
import App from "./App";

import ReactDOM from "react-dom/client";



const root = ReactDOM.createRoot(document.getElementById('root'));
export let rerenderTree = (allData, addPost, updatePostText, addMess) => {
    root.render(

        <React.StrictMode>
            <BrowserRouter >
                <App addMess={addMess} allData={allData} post={addPost} updatePostText={updatePostText} />
            </BrowserRouter>
        </React.StrictMode>


    );
}
