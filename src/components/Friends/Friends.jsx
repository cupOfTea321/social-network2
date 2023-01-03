import f from "./Friends.module.css";
import React from "react";
import Paginator from "./Paginator";
import Friend from "./Friend";

let Friends = (props) => {

    return (
        <div className={f.main}>
            <Paginator {...props}/>
            {

                props.users.map(u =>
                    <Friend key={u.id} user={u}
                            followingInProgress={props.followingInProgress}
                            follow={props.follow}
                            unfollow={props.unfollow}
                    />
                )
            }

        </div>
    );
}

export default Friends;