
import m from './Profile.module.css'
import ProfileWrapper from "./ProfileWrapper/ProfileWrapper";

import ProfileBarsContainer from "./ProfileBars/ProfileBarsContainer";
const Profile = (props) => {

    return (
        <main className={m.profile_main}>
            <ProfileWrapper profile={props.profile}/>
            <ProfileBarsContainer/>
        </main>
    );
}

export default Profile;