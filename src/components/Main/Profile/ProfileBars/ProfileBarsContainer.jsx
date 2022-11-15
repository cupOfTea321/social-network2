
import React from "react";
import {addPostActionCreator, changeTextPostActionCreator} from "../../../../Redux/profile_reducer";
import ProfileBars from "./ProfileBars";
import storeContext from "./../../../../storeContext"

const ProfileBarsContainer = (props) => {
    return(
        <storeContext.Consumer>
            {
            (store) =>{
                let state =store.getState();
            let btnClick = () => {
                // props.dispatch.type = 'ADD-POST';

                store.dispatch(addPostActionCreator());

            }
            let changeTextPost = (text) => {
                // props.dispatch.type = 'UPDATE-TEXT';
                let action = changeTextPostActionCreator(text);

                store.dispatch(action);
            }
            return  <ProfileBars
                updatePostText={changeTextPost}
                addPost={btnClick}
                posts={state.profilePage.likeCount}
            />}
        }
        </storeContext.Consumer>

    );
}
export default ProfileBarsContainer;