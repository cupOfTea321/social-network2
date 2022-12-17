import {AuthAPI} from "../api/api";

const SET_USER_DATA = 'SET_USER_DATA';


export const setUserData= (id, email, login) => ({type: SET_USER_DATA, data: {id, email, login}})
export const getUserData= (id, email, login) => (dispatch) => {
    return(
        AuthAPI.me().then(response => {
            let {id, email, login} = response.data.data;
            dispatch(setUserData(id, email, login));
        })
    )
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
                isAuth: true
            }


        default:
            return state;
    }

}
export default AuthReducer;