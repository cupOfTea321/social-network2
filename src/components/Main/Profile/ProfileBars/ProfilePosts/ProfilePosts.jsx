import m from "./../../Profile.module.css"



const ProfilePosts = (props) => {

    // let likeCount = props.allData.likeCount[0].count;
    return(
        <div className={m.profile_block2}>
            <div className={m.posts_about}>
                <div className={`${m.profile_photo_div} + ${m.round} + ${m.post_photo} `}>
                </div>
                <h3 className={m.profile_name}>Alex Kobzev</h3>

            </div>
            <div className={m.posts}>
                <p className={m.text_post}>
                    {props.mess}
                </p>
                <p className={m.likes}>Likes: {props.likeCount}</p>
            </div>
        </div>
    );
}
export default ProfilePosts;