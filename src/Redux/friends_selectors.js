import {createSelectorHook} from "react-redux";

export const getUsers = (state) => {
    return state.friendsPage.users
}

// сложный селектор с использованием reselect
export const getUsersSuper = createSelectorHook(getUsers, (users) => {
    debugger
    return users
})
export const getPageSize = (state) => {
    return state.friendsPage.pageSize
}
export const getTotalFriendsCount = (state) => {
    return state.friendsPage.totalFriendsCount
}

export const getCurrentPage = (state) => {
    return state.friendsPage.currentPage
}
export const getIsFetching = (state) => {
    return state.friendsPage.isFetching
}
export const getFollowingInProgress = (state) => {
    return state.friendsPage.followingInProgress
}