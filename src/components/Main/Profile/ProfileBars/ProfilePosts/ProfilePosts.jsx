import m from "./../../Profile.module.css"
import {Component} from "react";
import userPhoto from "../../../../../assets/images/user.png";
import React from "react";


class ProfilePosts extends Component {



    render() {
        // this.shouldComponentUpdate()

        // let likeCount = props.allData.likeCount[0].count;
        return (

            <div className={m.profile_block2}>
                <div className={m.posts_about}>

                        <img className={`${m.profile_photo_div} + ${m.round} `} alt="img" src={userPhoto}/>

                    <h3 className={m.profile_name}>Alex Kobzev</h3>

                </div>
                <div className={m.posts}>
                    <p className={m.text_post}>
                        {this.props.mess}
                    </p>
                    <p className={m.likes}>Likes: {this.props.likeCount}</p>
                </div>
            </div>
        );
    }
}

export default ProfilePosts;