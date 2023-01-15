



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
import {
    getCurrentPage, getFollowingInProgress,
    getIsFetching,
    getPageSize,
    getTotalFriendsCount,
    getUsers
} from "../../Redux/friends_selectors";

class FriendsAPIComponent extends React.Component {

    componentDidMount() {
        this.props.getUsers(this.props.currentPage, this.props.pageSize);

    }
    setFriendsPage = (pageNumber) => {
        this.props.getUsers(pageNumber, this.props.pageSize);
        this.props.setPage(pageNumber);
    }
    render() {
        return(
            <>
                {/*{this.props.isFetching ? <Loader/> : null}*/}
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
        users: getUsers(state),
        pageSize: getPageSize(state),
        totalFriendsCount: getTotalFriendsCount(state),
        currentPage: getCurrentPage(state),
        isFetching: getIsFetching(state),
        followingInProgress: getFollowingInProgress(state),

    }
}


export default compose(

    connect(mapStateToProps, {
        follow,
        unfollow,
        setPage,
        toggleFollowing,
        getUsers: getUsersThunkCreator,

    })
)(FriendsAPIComponent) ;