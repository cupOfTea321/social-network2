
import React from "react";
import {addPostActionCreator, changeTextPostActionCreator} from "../../../../Redux/profile_reducer";
import ProfileBars from "./ProfileBars";


const ProfileBarsContainer = (props) => {

    let btnClick = () => {
        // props.dispatch.type = 'ADD-POST';

        props.dispatch(addPostActionCreator());

    }
    let changeTextPost = (text) => {
        // props.dispatch.type = 'UPDATE-TEXT';
        let action = changeTextPostActionCreator(text);

        props.dispatch(action);
    }

    return(
        <ProfileBars updatePostText={changeTextPost} addPost={btnClick} posts={props.state.profilePage.likeCount}/>
    );
}
export default ProfileBarsContainer;