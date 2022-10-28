
import m from './Profile.module.css'
const Profile = () => {

    return (
        <main>
            <div className={m.main_photo}>

            </div>
            <div className={m.profile_top}>
                <div className={`${m.profile_photo_div} + ${m.round} `}>

                </div>

                <div className={m.profile_text}>
                    <h3 className={m.profile_name}>Alex Kobzev</h3>
                    <p className="grey_text"> ddragon@gmail.com</p>
                </div>
                <div className={m.profile_buttons}>
                    <button className={m.add_button}>ADD FRIEND</button>
                    <button className={m.common_button_profile}>i</button>
                    <button className={m.common_button_profile}>i</button>
                </div>
            </div>
        </main>
    );
}

export default Profile;