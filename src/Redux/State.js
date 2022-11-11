let rerenderTree = () => {
    console.log("State  changed!")
}


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


    getState (){

        return store._state
    },
    addMess (text)  {
        let newMess = {
            id: 4,
            message: text
        }
        store._state.dialogsPage.messages.push(newMess);
        rerenderTree(store._state);
    },
    addPost () {
        let newPost = {
            id: 5,
            count: 0,
            mess: store._state.profilePage.postText
        }
        store._state.profilePage.likeCount.push(newPost);
        rerenderTree(store._state);
    },
    updatePostText (newText) {

        store._state.profilePage.postText = newText;
        rerenderTree(store._state);
    },
    subscribe (observer) {
        rerenderTree = observer;
    }
}
window.store = store;



export default store;
