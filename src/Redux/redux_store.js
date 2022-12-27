import {applyMiddleware, combineReducers, legacy_createStore} from "redux";
import {profileReducer} from "./profile_reducer";
import {dialogsReducer} from "./dialogs_reducer";
import {friendsReducer} from "./friends_reducer";
import {reducer as formReducer} from "redux-form"
import AuthReducer from "./auth_reducer";
import thunk from "redux-thunk";
import AppReducer from "./app_reducer";
let reducers = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    friendsPage: friendsReducer,
    auth  : AuthReducer,
    form: formReducer,
    app: AppReducer,
})

// автоматически создаёт объект стор, в который передаются редьюсеры
let store = legacy_createStore(reducers, applyMiddleware(thunk));

window.store = store;
export default store;