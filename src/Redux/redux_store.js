import {combineReducers, legacy_createStore} from "redux";
import {profileReducer} from "./profile_reducer";
import {dialogsReducer} from "./dialogs_reducer";
import {friendsReducer} from "./friends_reducer";
let reducers = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    friendsPage: friendsReducer
})

// автоматически создаёт объект стор, в который передаются редьюсеры
let store = legacy_createStore(reducers);

window.store = store;
export default store;