import {ProfileAPI, UsersAPI} from "../api/api";

const ADD_POST = 'ADD-POST';
const DELETE_POST = 'DELETE_POST';
const SAVE_PHOTO_SUCCESS = 'SAVE_PHOTO_SUCCESS';
const SET_USER_PROFILE = 'SET-USER-PROFILE';
const SET_STATUS = 'SET-STATUS';
export const addPostActionCreator = (text) => ({type: ADD_POST, text: text})
export const deletePost = (text) => ({type: DELETE_POST, text: text})
export const savePhotoSuccess = (photos) => ({type: SAVE_PHOTO_SUCCESS, photos})
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
export const savePhoto = (file) => async (dispatch) => {
    let response = await ProfileAPI.savePhoto(file)
    if (response.data.resultCode === 0) {
        dispatch(savePhotoSuccess(response.data.data.photos));
    }
}


let initialState = {
    likeCount: [
        {id: '1', count: '17', mess: 'Smth from me'},
        {id: '2', count: '4', mess: 'Hello, today is a good day!'},
        {id: '3', count: '44', mess: 'Никита, я всё знаю!'},
    ],
    profile: true,
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
        case SAVE_PHOTO_SUCCESS: {
            return {
                ...state,
                profile: {...state.profile, photos: action.photos},
            }
        }
        default:
            return state;
    }

}