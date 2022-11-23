



import {connect} from "react-redux";


import {follow, setPage, setUsers, toggleIsFetching, unfollow} from "../../Redux/friends_reducer";

import React from "react";
import axios from "axios";
import Friends from "./Friends";

import Loader from "../common/Loader/Loader";

class FriendsAPIComponent extends React.Component {
    // constructor(props) {
    //     super(props);
    //
    //
    //
    // }
    componentDidMount() {
        this.props.toggleIsFetching(true);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`).then(response => {
            this.props.toggleIsFetching(false);
            this.props.setUsers(response.data.items);
        });
    }
    setFriendsPage = (pageNumber) => {
        this.props.toggleIsFetching(true);
        this.props.setPage(pageNumber);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`).then(response => {
            this.props.toggleIsFetching(false);
            this.props.setUsers(response.data.items);
        });
    }
    render() {

        return(
            <>
                {this.props.isFetching ? <Loader/> : null}
            <Friends
                totalFriendsCount={this.props.totalFriendsCount}
                pageSize={this.props.pageSize}
                currentPage={this.props.currentPage}
                setFriendsPage={this.setFriendsPage}
                users={this.props.users}
                follow={this.props.follow}
                unfollow={this.props.unfollow}
            />
            </>
        )
    }
}
let mapStateToProps = (state) => {

    return{
        users: state.friendsPage.users,
        pageSize: state.friendsPage.pageSize,
        totalFriendsCount: state.friendsPage.totalFriendsCount,
        currentPage: state.friendsPage.currentPage,
        isFetching: state.friendsPage.isFetching
    }
}
// let mapDispatchToProps = (dispatch) => {
//     return{
//         follow: (useId) => {
//             dispatch(followAC(useId))
//         },
//         unfollow: (useId) => {
//             dispatch(unfollowAC(useId))
//         },
//         setUser: (useId) => {
//             dispatch(setUsersAC(useId))
//         },
//         setPage: (pageNumber) => {
//             dispatch(setPageAC(pageNumber))
//         },
//         toggleIsFetching: (isFetching) => {
//             dispatch(toggleIsFetchingAC(isFetching))
//         }
//     }
// }
const ReduxDialogsContainer = connect(mapStateToProps, {
    follow,
    unfollow,
    setUsers,
    setPage,
    toggleIsFetching,

})(FriendsAPIComponent);
export default ReduxDialogsContainer;