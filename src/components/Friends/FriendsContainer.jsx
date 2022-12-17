



import {connect} from "react-redux";


import {
    follow,
    getUsersThunkCreator,
    setPage,
    toggleFollowing,
    unfollow
} from "../../Redux/friends_reducer";

import React from "react";

import Friends from "./Friends";

import Loader from "../common/Loader/Loader";
import {compose} from "redux";

class FriendsAPIComponent extends React.Component {
    // constructor(props) {
    //     super(props);
    //
    //
    //
    // }

    componentDidMount() {
        this.props.getUsers(this.props.currentPage, this.props.pageSize);
        // this.props.toggleIsFetching(true);
        // UsersAPI.getUsers(this.props.currentPage, this.props.pageSize).then(response => {
        //
        //         this.props.toggleIsFetching(false);
        //         this.props.setUsers(response.items);
        //     });
    }
    setFriendsPage = (pageNumber) => {
        this.props.getUsers(pageNumber, this.props.pageSize);
        // this.props.toggleIsFetching(true);
        this.props.setPage(pageNumber);
        // UsersAPI.getUsers(pageNumber, this.props.pageSize).then(response => {
        //     this.props.toggleIsFetching(false);
        //     this.props.setUsers(response.items);
        // });
    }
    render() {
        // debugger
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
                toggleIsFetching={this.props.toggleIsFetching}
                // followingInProgress={this.props.followingInProgress}
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
        isFetching: state.friendsPage.isFetching,
        followingInProgress: state.friendsPage.followingInProgress,

    }
}
// const ReduxDialogsContainer = connect(mapStateToProps, {
//     follow,
//     unfollow,
//     setPage,
//     toggleFollowing,
//     getUsers: getUsersThunkCreator,
//
// })(FriendsAPIComponent);

export default compose(

    connect(mapStateToProps, {
        follow,
        unfollow,
        setPage,
        toggleFollowing,
        getUsers: getUsersThunkCreator,

    })
)(FriendsAPIComponent) ;