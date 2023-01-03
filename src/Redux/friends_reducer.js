import {UsersAPI} from "../api/api";

const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';
const SET_PAGE = 'SET_PAGE';
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING';
const TOGGLE_FOLLOWING = 'TOGGLE_FOLLOWING';
export const follow= (userId) => ({type: FOLLOW, userId})
export const unfollow= (userId) => ({type: UNFOLLOW, userId})
export const setUsers= (users) => ({type: SET_USERS, users})
export const setPage= (currentPage) => ({type: SET_PAGE, currentPage})
export const toggleIsFetching= (isFetching) => ({type: TOGGLE_IS_FETCHING, isFetching})
export const toggleFollowing= (isFetching) => ({type: TOGGLE_FOLLOWING, isFetching})
let initialState = {
    users: [],
    pageSize: 4,
    totalFriendsCount: 10,
    currentPage: 1,
    isFetching: true,
    followingInProgress: false,
}
export const friendsReducer = (state = initialState, action) => {
    switch (action.type){
        case FOLLOW:
            return  {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId){
                        return {...u, followed: true}
                    }
                    return u;
                })
            }
        case UNFOLLOW:
            return  {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId){
                        return {...u, followed: false}
                    }
                    return u;
                })
            }
        case SET_USERS:
            return {...state, users: action.users }
        case SET_PAGE:
            return {...state, currentPage: action.currentPage }
        case TOGGLE_IS_FETCHING:
            return {...state, isFetching: action.isFetching }
        case TOGGLE_FOLLOWING:
            return {...state, followingInProgress: action.isFetching }
        default:
            return state;
    }

}

export const getUsersThunkCreator = (currentPage, pageSize) => {
    return async (dispatch) => {
        dispatch(toggleIsFetching(true));
        let response = await UsersAPI.getUsers(currentPage, pageSize);
        dispatch(toggleIsFetching(false));
        dispatch(setUsers(response.items));
    }
}
export const unfollowThunkCreator = (userId) => {
    return async (dispatch) => {

        dispatch(toggleIsFetching(true));
        let response = await UsersAPI.unfollowUsers(userId)
        if (response.resultCode === 0) {
            dispatch(unfollow(userId))
        }
        dispatch(toggleIsFetching(false));
    }
}
export const followThunkCreator = (userId) => {
    return async (dispatch) => {
        dispatch(toggleIsFetching(true));
        let response = await UsersAPI.followUsers(userId)
        if (response.resultCode === 0) {
            dispatch(follow(userId))
        }
        dispatch(toggleIsFetching(false));
    }
}
