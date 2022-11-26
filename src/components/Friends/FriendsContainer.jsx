



import {connect} from "react-redux";


import {follow, setPage, setUsers, toggleIsFetching, unfollow} from "../../Redux/friends_reducer";

import React from "react";

import Friends from "./Friends";

import Loader from "../common/Loader/Loader";
import {UsersAPI} from "../../api/api";

class FriendsAPIComponent extends React.Component {
    // constructor(props) {
    //     super(props);
    //
    //
    //
    // }
    componentDidMount() {

        this.props.toggleIsFetching(true);
        UsersAPI.getUsers(this.props.currentPage, this.props.pageSize).then(response => {

                this.props.toggleIsFetching(false);
                this.props.setUsers(response.items);
            });
    }
    setFriendsPage = (pageNumber) => {
        this.props.toggleIsFetching(true);
        this.props.setPage(pageNumber);
        UsersAPI.getUsers(pageNumber, this.props.pageSize).then(response => {
            this.props.toggleIsFetching(false);
            this.props.setUsers(response.items);
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
const ReduxDialogsContainer = connect(mapStateToProps, {
    follow,
    unfollow,
    setUsers,
    setPage,
    toggleIsFetching,

})(FriendsAPIComponent);
export default ReduxDialogsContainer;