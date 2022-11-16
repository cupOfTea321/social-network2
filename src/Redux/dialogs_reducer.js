const ADD_MESS = 'ADD-MESS';
export const addMessActionCreator = (text) => ({
    type: ADD_MESS,
    text: text
})
let initialState = {
    messages: [
        {id: '1', message: 'Hi!'},
        {id: '2', message: 'How are you?'}
    ],
    dialogs: [
        {id: '1', name: 'Sonya'},
        {id: '2', name: 'Dima'},
        {id: '3', name: 'Daria'}
    ],
}
export const dialogsReducer = (state = initialState, action) => {
    // let stateCopy;
    switch (action.type){
        case ADD_MESS:

            let newMess = {
                id: 4,
                message: action.text
            }
            return {
                ...state,
                messages:[...state.messages, newMess]
            }


        default:
            return state;
    }

}