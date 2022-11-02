import m from "../Profile.module.css";

const ProfileWrapper = () => {
    return(
        <div className={m.photo_wrapper}>
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
            <div className={m.nav_profile}>
                <nav>
                    <a className={m.a_main} href="/#">About</a>
                    <a className="grey_text" href="/#">Membership</a>
                    <a className="grey_text" href="/#">Discussion</a>
                    <a className="grey_text" href="/#">Video</a>
                    <a className="grey_text" href="/#">Group</a>
                    <a className="grey_text" href="/#">Events</a>
                    <a className="grey_text" href="/#">Media</a>
                </nav>
            </div>
        </div>
    );
}
export default ProfileWrapper;