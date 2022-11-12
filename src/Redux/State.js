import {profileReducer} from "./profile_reducer";
import {dialogsReducer} from "./dialogs_reducer";




let store = {
    _state : {
        dialogsPage:{
            messages: [
                {id: '1', message: 'Hi!'},
                {id: '2', message: 'How are you?'}
            ],
            dialogs: [
                {id: '1', name: 'Sonya'},
                {id: '2', name: 'Dima'},
                {id: '3', name: 'Daria'}
            ],
        },
        profilePage: {
            likeCount: [
                {id: '1', count: '17', mess: 'Smth from me'},
                {id: '2', count: '4', mess: 'Hello, today is a good day!'},
                {id: '3', count: '44', mess: 'Никита, я всё знаю!'},
            ],
            postText: 'textPost'

        },


    },
    _rerenderTree ()  {
        console.log("State  changed!")
    },

    subscribe (observer) {
        this._rerenderTree = observer;
    },
    getState (){

        return this._state
    },



    dispatch(action){

        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
        this._rerenderTree(this._state);

    }
}


window.store = store;



export default store;
