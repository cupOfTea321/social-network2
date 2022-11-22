const ADD_POST = 'ADD-POST';
const UPDATE_TEXT = 'UPDATE-TEXT';
export const addPostActionCreator = () => ({type: ADD_POST })
export const changeTextPostActionCreator = (text) => ({
    type: UPDATE_TEXT,
    newText: text
})
let initialState = {
    likeCount: [
        {id: '1', count: '17', mess: 'Smth from me'},
        {id: '2', count: '4', mess: 'Hello, today is a good day!'},
        {id: '3', count: '44', mess: 'Никита, я всё знаю!'},
    ],
    postText: 'textPost'
}
export const profileReducer = (state = initialState, action) => {
    switch (action.type){
        case ADD_POST: {
            let newPost = {
                id: 5,
                count: 0,
                mess: state.postText
            };
            return  {
                ...state,
                likeCount: [...state.likeCount, newPost]
            };

        }
        case UPDATE_TEXT: {
            return  {
                ...state,
                postText: action.newText
            };
        }
        default:
            return state;
    }

}