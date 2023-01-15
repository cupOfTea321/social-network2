import m from "../Profile.module.css";
import ProfileStatusWithHooks from "./ProfileStatusWithHooks";
import userPhoto from "../../../../assets/images/user.png";
import React, {useState} from "react";


import {RiBookmarkFill, RiBookmarkLine, RiMailLine} from "react-icons/ri";
import {NavLink} from "react-router-dom";
const ProfileWrapper = (props) => {

    const onMainPhotoSelected = (e) => {
        if (e.target.files.length){
            props.savePhoto(e.target.files[0])
        }
    }
    const [save, setSave] = useState(false)
        return(
            <div className={m.photo_wrapper}>
                <div className={m.main_photo}>

                </div>
                <div className={m.profile_top}>
                    {

                    }
                    <div  >
                        {/*<img src={props.profile.photos.small} alt=''/>*/}
                        <img className={`${m.profile_photo_div} + ${m.round} `} alt="img" src={props.profile !== true ? props.profile.photos.small : userPhoto}/>
                    </div>
                    {props.isOwner && <div><input onChange={onMainPhotoSelected} type={'file'}/></div>}
                    <div className={m.profile_text}>

                        <h3 className={m.profile_name}>Alex Kobzev</h3>

                        <ProfileStatusWithHooks updateStatus={props.updateStatus} status={props.status}/>

                    </div>
                    <div className={m.profile_buttons} style={{display: 'flex', alignItems: 'center', justifyContent: 'space-between'}}>
                        <button onClick={() => setSave(true)} style={{marginLeft: 85, cursor: 'pointer'}} className={m.add_button}>ADD FRIEND</button>
                        <div style={{marginTop: 5}}>

                            <NavLink to='/dialogs' className={m.common_button_profile}>
                            <span>
                                <RiMailLine/>
                            </span>

                            </NavLink>
                            {!save ? <NavLink  to='/' className={m.common_button_profile}>
                                    <span><RiBookmarkLine  onClick={() => setSave(true)}/></span>
                                </NavLink>
                                : <NavLink  to='/' className={m.common_button_profile}>
                                    <span><RiBookmarkFill onClick={() => setSave(false)}/></span>
                                </NavLink>
                            }
                        </div>


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