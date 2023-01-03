import {AuthAPI} from "../api/api";
import {stopSubmit} from "redux-form";

const SET_USER_DATA = 'SET_USER_DATA';


export const setUserData= (id, email, login, isAuth) => ({type: SET_USER_DATA, data: {id, email, login, isAuth}})
export const getUserData= (id, email, login) => async (dispatch) => {

        let response = await AuthAPI.me();

            if (response.data.resultCode === 0){
                let {id, email, login} = response.data.data;
                dispatch(setUserData(id, email, login, true));


        }

}
export const login= (email, password, rememberMe) => async (dispatch) => {


    let response = await AuthAPI.login(email, password, rememberMe);

            if (response.data.resultCode === 0){
                dispatch(getUserData())
            }
            else {
                let message = response.data.messages.length > 0 ? response.data.messages[0]: "Some error";
                dispatch(stopSubmit("login", {_error: message}));
            }



}
export const logout = () => async (dispatch) => {
    let response = await AuthAPI.logout();
            if (response.data.resultCode === 0){
                dispatch(setUserData(null, null, null, false));
            }

}


let initialState = {
    id: null,
    email: null,
    login: null,
    isAuth: false
}
const AuthReducer = (state = initialState, action) => {
    switch (action.type){
        case SET_USER_DATA:
            return  {
                ...state,
                ...action.data,
                // isAuth: true
            }


        default:
            return state;
    }

}
export default AuthReducer;