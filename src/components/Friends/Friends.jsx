import axios from "axios";
import f from "./Friends.module.css";
import userPhoto from "../../assets/images/user.png"
import React from "react";
class Friends extends React.Component {
    constructor(props) {
        super(props);

            axios.get('https://social-network.samuraijs.com/api/1.0/users').then(response => {

                this.props.setUser(response.data.items);
            });

    }

    render() {
        return(

            <div className={f.main}>
                {
                    this.props.users.map(u =>
                        <div key={u.id} className={f.user_container}>


                            <img alt="img" src={u.photos.small != null ? u.photos.small : userPhoto}/>
                            <p className={f.user_name}>{u.name}</p>
                            <p className={f.user_email}>{u.id}</p>
                            <div>
                                {u.followed
                                    ? <button onClick={() => {
                                        this.props.unfollow(u.id)
                                    }}>UNFOLLOW</button>
                                    : <button onClick={() => {
                                        this.props.follow(u.id)
                                    }}>FOLLOW</button>
                                }
                            </div>


                        </div>


                    )
                }

            </div>
        )
    }
}
export default Friends;