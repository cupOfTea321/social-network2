import f from "./Friends.module.css";
import userPhoto from "../../assets/images/user.png";
import React from "react";

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


                        <img alt="img" src={u.photos.small != null ? u.photos.small : userPhoto}/>

                        <p className={f.user_name}>{u.name}</p>
                        <p className={f.user_email}>{u.id}</p>
                        <div>
                            {u.followed
                                ? <button onClick={() => {
                                    props.unfollow(u.id)
                                }}>UNFOLLOW</button>
                                : <button onClick={() => {
                                    props.follow(u.id)
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