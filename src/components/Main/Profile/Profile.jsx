
import m from './Profile.module.css'
import ProfileWrapper from "./ProfileWrapper/ProfileWrapper";
import ProfileBars from "./ProfileBars/ProfileBars";
const Profile = (props) => {

    return (
        <main className={m.profile_main}>
            <ProfileWrapper/>
            <ProfileBars updatePostText={props.updatePostText} post={props.post} allData={props.allData} />
        </main>
    );
}

export default Profile;