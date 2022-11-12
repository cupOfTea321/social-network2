const ADD_POST = 'ADD-POST';
const UPDATE_TEXT = 'UPDATE-TEXT';
export const addPostActionCreator = () => ({type: ADD_POST })
export const changeTextPostActionCreator = (text) => ({
    type: UPDATE_TEXT,
    newText: text
})
export const profileReducer = (state, action) => {
    switch (action.type){
        case ADD_POST:
            let newPost = {
                id: 5,
                count: 0,
                mess: state.postText
            }
            state.likeCount.push(newPost);
            return state;
        case UPDATE_TEXT:
            state.postText = action.newText;
            return state;
        default:
            return state;
    }
    // if (action.type === ADD_POST){
    //     let newPost = {
    //         id: 5,
    //         count: 0,
    //         mess: state.postText
    //     }
    //     state.likeCount.push(newPost);
    // } else if (action.type === UPDATE_TEXT){
    //     state.postText = action.newText;
    //
    // }

}