import f from "./Friends.module.css";
import userPhoto from "../../assets/images/user.png";
import React from "react";
import {NavLink} from "react-router-dom";

let Friend = ({user, followingInProgress, follow, unfollow}) => {

    return (

                    <div key={user.id} className={f.user_container}>

                        <NavLink to={'./../profile/' + user.id}>
                            <img alt="img" src={user.photos.small != null ? user.photos.small : userPhoto}/>
                        </NavLink>


                        <p className={f.user_name}>{user.name}</p>
                        <p className={f.user_email}>{user.id}</p>
                        <div>

                            {user.followed

                                ? <button disabled={followingInProgress} onClick={() => {

                                    unfollow(user.id)
                                }}>UNFOLLOW</button>
                                : <button disabled={followingInProgress} onClick={() => {
                                    follow(user.id)

                                }}>FOLLOW</button>
                            }
                        </div>


                    </div>
                )

}

export default Friend;