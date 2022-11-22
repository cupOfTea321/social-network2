const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';
const SET_PAGE = 'SET_PAGE';
export const followAC= (userId) => ({type: FOLLOW, userId})
export const unfollowAC= (userId) => ({type: UNFOLLOW, userId})
export const setUsersAC= (users) => ({type: SET_USERS, users})
export const setPageAC= (currentPage) => ({type: SET_PAGE, currentPage})
let initialState = {
    users: [],
    pageSize: 4,
    totalFriendsCount: 10,
    currentPage: 1,

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
        default:
            return state;
    }

}