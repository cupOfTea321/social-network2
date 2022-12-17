
import m from './Profile.module.css'
import ProfileWrapper from "./ProfileWrapper/ProfileWrapper";

import ProfileBarsContainer from "./ProfileBars/ProfileBarsContainer";
import {Navigate} from "react-router-dom";
import React from "react";
const Profile = (props) => {

    return (
        <main className={m.profile_main}>
            <ProfileWrapper profile={props.profile}/>
            <ProfileBarsContainer/>
        </main>
    );
}

export default Profile;