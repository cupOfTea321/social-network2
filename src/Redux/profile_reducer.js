import {ProfileAPI, UsersAPI} from "../api/api";

const ADD_POST = 'ADD-POST';
const DELETE_POST = 'DELETE_POST';

const SET_USER_PROFILE = 'SET-USER-PROFILE';
const SET_STATUS = 'SET-STATUS';
export const addPostActionCreator = (text) => ({type: ADD_POST, text: text})
export const deletePost = (text) => ({type: DELETE_POST, text: text})
export const setUserProfile = (profile) => ({type: SET_USER_PROFILE, profile})
export const getUserProfile = (userId) => async (dispatch) => {
    let response = await UsersAPI.getProfile(userId);
    dispatch(setUserProfile(response.data));
}
export const setStatus = (status) => ({type: SET_STATUS, status})
export const getStatus = (userId) => async (dispatch) => {
    let response = await ProfileAPI.getStatus(userId);
    dispatch(setStatus(response.data));
}
export const updateStatus = (status) => async (dispatch) => {
    let response = await ProfileAPI.updateStatus(status)
    if (response.data.resultCode === 0) {
        dispatch(setStatus(status));
    }
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
    switch (action.type) {
        case ADD_POST: {
            let newPost = {
                id: 5,
                count: 0,
                mess: action.text,

            };
            return {
                ...state,
                likeCount: [...state.likeCount, newPost],
                text: action.text
            };

        }

        case SET_USER_PROFILE: {
            return {
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
        case DELETE_POST: {
            return {
                ...state,
                posts: state.likeCount.filter(p => p.id !== action.text)
            }
        }
        default:
            return state;
    }

}