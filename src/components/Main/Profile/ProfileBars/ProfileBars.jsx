import m from "../Profile.module.css";
import ProfilePosts from "./ProfilePosts/ProfilePosts";
import React from "react";



const ProfileBars = (props) => {
    // props.post("ну я четвёртый");
    let likeElements = props.posts
        .map(like => <ProfilePosts  likeCount={like.count} key={like.id} id={like.id} mess={like.mess}/>)

    let post = React.createRef();
    let btnClick = () => {
        // props.dispatch.type = 'ADD-POST';

        props.addPost();
        post.current.value = '';
    }
    let changeTextPost = () => {
        // props.dispatch.type = 'UPDATE-TEXT';
        let text = post.current.value;

        props.updatePostText(text);
    }

    return(
        <div className={m.profile_bars}>
            <div className={m.profile_about}>
                <h2>About</h2>
                <p>My name is Alex Kobzev. I`m a React/Redux developer</p>
            </div>
            <div className={m.profile_posts}>

                <div className={m.profile_block1}>
                    <p className="grey_text">Create Post</p>

                    <textarea onChange={changeTextPost}  ref={post} id="text" placeholder="What`s on your mind?"  rows="5"/>
                    <button onClick={ btnClick}>Add</button>
                </div>
                {likeElements}

            </div>
        </div>
    );
}
export default ProfileBars;