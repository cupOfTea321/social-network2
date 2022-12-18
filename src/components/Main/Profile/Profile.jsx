
import m from './Profile.module.css'
import ProfileWrapper from "./ProfileWrapper/ProfileWrapper";

import ProfileBarsContainer from "./ProfileBars/ProfileBarsContainer";

import React from "react";
const Profile = (props) => {

    return (
        <main className={m.profile_main}>
            <ProfileWrapper profile={props.profile} status={props.status}
            updateStatus={props.updateStatus}/>
            <ProfileBarsContainer/>
        </main>
    );
}

export default Profile;