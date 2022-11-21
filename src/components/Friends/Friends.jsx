import axios from "axios";
import f from "./Friends.module.css";
import userPhoto from "../../assets/images/user.png"
const Friends = (props) =>{

    const getUsers = () => {

        if (props.users.length === 0){
            axios.get('https://social-network.samuraijs.com/api/1.0/users').then(response => {

                props.setUser(response.data.items);
            });
        }
    }
    return(

        <div className={f.main}>
            <button onClick={getUsers}>Get Users</button>
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
    )
}
export default Friends;