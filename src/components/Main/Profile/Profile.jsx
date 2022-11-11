
import m from './Profile.module.css'
import ProfileWrapper from "./ProfileWrapper/ProfileWrapper";
import ProfileBars from "./ProfileBars/ProfileBars";
const Profile = (props) => {

    return (
        <main className={m.profile_main}>
            <ProfileWrapper/>
            <ProfileBars updatePostText={props.updatePostText}
                         state={props.state}
                         addPost={props.addPost}/>
        </main>
    );
}

export default Profile;