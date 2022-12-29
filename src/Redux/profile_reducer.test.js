import {addPostActionCreator, deletePost, profileReducer} from "./profile_reducer";

let state = {
    likeCount: [
        {id: '1', count: '17', mess: 'Smth from me'},
        {id: '2', count: '4', mess: 'Hello, today is a good day!'},
        {id: '3', count: '44', mess: 'Никита, я всё знаю!'},
    ]
}
test('new post should be added', () => {

    let action = addPostActionCreator("test post")

    let newState = profileReducer(state, action)

    expect(newState.likeCount.length).toBe(4);
});

test('post should be deleted', () => {

    let action = deletePost(1)

    let newState = profileReducer(state, action)

    expect(newState.likeCount.length).toBe(3);
});
