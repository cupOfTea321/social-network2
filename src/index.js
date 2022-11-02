

import './index.css';

import reportWebVitals from './reportWebVitals';
import allData, {addMess, updatePostText} from "./Redux/State";
import {addPost} from "./Redux/State";

import {rerenderTree} from "./render";

rerenderTree(allData, addPost, updatePostText, addMess);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
