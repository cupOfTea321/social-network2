import f from "./Friends.module.css";
import userPhoto from "../../assets/images/user.png";
import React from "react";
import {NavLink} from "react-router-dom";

import {UsersAPI} from "../../api/api";

let Friends = (props) => {
    let pagesCount = Math.ceil(props.totalFriendsCount / props.pageSize) ;

    let pages = [];
    for (let i = 1; i <= pagesCount; i++){
        pages.push(i);
    }
    return (
        <div className={f.main}>
            <div>
                {pages.map(p => {
                    return <span
                        key={p}
                        className={props.currentPage === p && f.selectedPage}
                                 onClick={(e) => {
                                     props.setFriendsPage(p)
                                 }}>
                         {p}
                     </span>
                })}
            </div>
            {
                props.users.map(u =>
                    <div key={u.id} className={f.user_container}>

                        <NavLink to={'./../profile/' + u.id}>
                            <img alt="img" src={u.photos.small != null ? u.photos.small : userPhoto}/>
                        </NavLink>


                        <p className={f.user_name}>{u.name}</p>
                        <p className={f.user_email}>{u.id}</p>
                        <div>
                            {u.followed
                                ? <button onClick={() => {
                                    UsersAPI.unfollowUsers(u.id).then(response => {
                                        if (response.resultCode === 0){
                                            props.unfollow(u.id)
                                        }
                                    });

                                }}>UNFOLLOW</button>
                                : <button onClick={() => {

                                        UsersAPI.followUsers(u.id).then(response => {
                                        if (response.resultCode === 0){
                                            props.follow(u.id)
                                        }
                                    });

                                }}>FOLLOW</button>
                            }
                        </div>


                    </div>
                )
            }

        </div>
    );
}

export default Friends;