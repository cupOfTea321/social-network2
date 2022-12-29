import m from "../Profile.module.css";
import ProfilePosts from "./ProfilePosts/ProfilePosts";
import React from "react";
import {Field, reduxForm} from "redux-form";
import { maxLengthCreator, requiredField} from "../../../../utils/validators/validators";
import {Textarea} from "../../../common/ControlForms/ControlForms";



const ProfileBars = (props) => {
    // props.post("ну я четвёртый");

    let likeElements = props.posts
        .map(like => <ProfilePosts  likeCount={like.count} key={like.id} id={like.id} mess={like.mess}/>)




    let addPost = (values) => {
            // props.dispatch.type = 'UPDATE-TEXT';

        props.addPost(values.post);
        values.post = '';
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

                    <ProfileReduxForm onSubmit={addPost}/>
                </div>
                {likeElements}

            </div>
        </div>
    );
}
const ProfileForm = (props) => {
    return(
        <form onSubmit={props.handleSubmit}>
            <Field validate={[requiredField, maxLengthCreator(10)]} component={Textarea} name={"post"} id="text" placeholder="What`s on your mind?" rows="5"/>
            <button >Add</button>
        </form>
    )
}
// Функция, возвращающая НОС
const ProfileReduxForm = reduxForm({
    // a unique name for the form
    form: 'post'
})(ProfileForm)
export default ProfileBars;