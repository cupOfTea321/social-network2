const ADD_MESS = 'ADD-MESS';
export const addMessActionCreator = (text) => ({
    type: ADD_MESS,
    text: text
})
export const dialogsReducer = (state, action) => {
    switch (action.type){
        case ADD_MESS:
            let newMess = {
                id: 4,
                message: action.text
            }
            state.messages.push(newMess);
            return state;
        default:
            return state;
    }

}