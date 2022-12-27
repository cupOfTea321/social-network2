import {getUserData} from "./auth_reducer";

const SET_INITIALIZED = 'SET_INITIALIZED';


export const setInitialized = () => ({type : SET_INITIALIZED})
export const initializeApp = () => (dispatch) => {
    // debugger
        let promise = dispatch(getUserData());

        Promise.all([promise]).then(() => {

            dispatch(setInitialized());
        })
}

let initialState = {
    initialized: false
}
const AppReducer = (state = initialState, action) => {

    switch (action.type){

        case SET_INITIALIZED:
            return  {
                ...state,
                initialized: true
            }
        default:
            return state;
    }
}
export default AppReducer;