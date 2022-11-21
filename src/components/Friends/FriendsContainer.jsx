



import {connect} from "react-redux";
import Friends from "./Friends";

import {followAC, setUsersAC, unfollowAC} from "../../Redux/friends_reducer";



let mapStateToProps = (state) => {

    return{
        users: state.friendsPage.users
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
        }
    }
}
const ReduxDialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Friends);
export default ReduxDialogsContainer;