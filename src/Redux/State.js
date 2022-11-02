import {rerenderTree} from "../render";

let allData = {
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


}
window.state = allData;
export let addMess = (text) => {
    let newMess = {
        id: 4,
        message: text
    }
    allData.dialogsPage.messages.push(newMess);
    rerenderTree(allData, addPost, updatePostText, addMess);
}
export let addPost = () => {
    let newPost = {
        id: 5,
        count: 0,
        mess: allData.profilePage.postText
    }
    allData.profilePage.likeCount.push(newPost);
    // allData.profilePage.postText = '';
    rerenderTree(allData, addPost, updatePostText, addMess);
}
export let updatePostText = (newText) => {

    allData.profilePage.postText = newText;
    rerenderTree(allData, addPost, updatePostText, addMess);
}

export default allData;
