import {ProfileAPI, UsersAPI} from "../api/api";

const ADD_POST = 'ADD-POST';

const SET_USER_PROFILE = 'SET-USER-PROFILE';
const SET_STATUS = 'SET-STATUS';
export const addPostActionCreator = (text) => ({type: ADD_POST, text: text})
export const setUserProfile = (profile) => ({type: SET_USER_PROFILE, profile })
export const getUserProfile = (userId) => (dispatch) => {
    return(
        UsersAPI.getProfile(userId).then(response => {

            dispatch(setUserProfile(response.data));
        })
    )
}
export const setStatus = (status) => ({type: SET_STATUS, status })
export const getStatus = (userId) => (dispatch) => {
    return(
        ProfileAPI.getStatus(userId).then(response => {

            dispatch(setStatus(response.data));
        })
    )
}
export const updateStatus = (status) => (dispatch) => {
    return(
        ProfileAPI.updateStatus(status).then(response => {
            if (response.data.resultCode === 0){
                dispatch(setStatus(status));
            }

        })
    )
}


let initialState = {
    likeCount: [
        {id: '1', count: '17', mess: 'Smth from me'},
        {id: '2', count: '4', mess: 'Hello, today is a good day!'},
        {id: '3', count: '44', mess: 'Никита, я всё знаю!'},
    ],
    profile: null,
    status: "without",
}
export const profileReducer = (state = initialState, action) => {
    switch (action.type){
        case ADD_POST: {
            let newPost = {
                id: 5,
                count: 0,
                mess: action.text,

            };
            return  {
                ...state,
                likeCount: [...state.likeCount, newPost],
                text: action.text
            };

        }

        case SET_USER_PROFILE: {
            return  {
                ...state,
                profile: action.profile
            };
        }
        case SET_STATUS: {
            return {
                ...state,
                status: action.status

            }
        }
        default:
            return state;
    }

}