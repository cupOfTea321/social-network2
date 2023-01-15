import f from "./Friends.module.css";
import React from "react";
import Paginator from "../common/Paginator";
import Friend from "./Friend";

let Friends = (props) => {

    return (
        <div className={f.main}>
            <div>
                <Paginator {...props}/>
            </div>

            <div className={f.users_list}>

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

        </div>
    );
}

export default Friends;