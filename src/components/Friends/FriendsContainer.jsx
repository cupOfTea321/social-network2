



import {connect} from "react-redux";
import Friends from "./Friends";

import {followAC, setPageAC, setUsersAC, unfollowAC} from "../../Redux/friends_reducer";



let mapStateToProps = (state) => {

    return{
        users: state.friendsPage.users,
        pageSize: state.friendsPage.pageSize,
        totalFriendsCount: state.friendsPage.totalFriendsCount,
        currentPage: state.friendsPage.currentPage,
    }
}
let mapDispatchToProps = (dispatch) => {
    return{
        follow: (useId) => {
            dispatch(followAC(useId))
        },
        unfollow: (useId) => {
            dispatch(unfollowAC(useId))
        },
        setUser: (useId) => {
            dispatch(setUsersAC(useId))
        },
        setPage: (pageNumber) => {
            dispatch(setPageAC(pageNumber))
        }
    }
}
const ReduxDialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Friends);
export default ReduxDialogsContainer;