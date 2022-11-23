const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';
const SET_PAGE = 'SET_PAGE';
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING';
export const follow= (userId) => ({type: FOLLOW, userId})
export const unfollow= (userId) => ({type: UNFOLLOW, userId})
export const setUsers= (users) => ({type: SET_USERS, users})
export const setPage= (currentPage) => ({type: SET_PAGE, currentPage})
export const toggleIsFetching= (isFetching) => ({type: TOGGLE_IS_FETCHING, isFetching})
let initialState = {
    users: [],
    pageSize: 4,
    totalFriendsCount: 10,
    currentPage: 1,
    isFetching: true,
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
        default:
            return state;
    }

}