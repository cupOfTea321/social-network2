
import m from './Profile.module.css'
import ProfileWrapper from "./ProfileWrapper/ProfileWrapper";

import ProfileBarsContainer from "./ProfileBars/ProfileBarsContainer";
const Profile = (props) => {

    return (
        <main className={m.profile_main}>
            <ProfileWrapper/>
            <ProfileBarsContainer dispatch={props.dispatch}
                         state={props.state}
                         />
        </main>
    );
}

export default Profile;