

const ADD_POST = 'ADD-POST';
const UPDATE_TEXT = 'UPDATE-TEXT';
const ADD_MESS = 'ADD-MESS';
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

        if (action.type === ADD_POST){
            let newPost = {
                id: 5,
                count: 0,
                mess: this._state.profilePage.postText
            }
            this._state.profilePage.likeCount.push(newPost);
            this._rerenderTree(this._state);
        } else if (action.type === ADD_MESS){
            let newMess = {
                id: 4,
                message: action.text
            }
            this._state.dialogsPage.messages.push(newMess);
            this._rerenderTree(this._state);
        } else if (action.type === UPDATE_TEXT){
            this._state.profilePage.postText = action.newText;
            this._rerenderTree(this._state);
        }
    }
}
export const addPostActionCreator = () => ({type: ADD_POST })
export const changeTextPostActionCreator = (text) => ({
        type: UPDATE_TEXT,
        newText: text
    })
export const addMessActionCreator = (text) => ({
    type: ADD_MESS,
    text: text
})
window.store = store;



export default store;
