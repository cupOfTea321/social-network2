

import {addPostActionCreator} from "../../../../Redux/profile_reducer";
import ProfileBars from "./ProfileBars";

import {connect} from "react-redux";



let mapStateToProps = (state) => {
    return{
        posts: state.profilePage.likeCount

    }
}
let mapDispatchToProps = (dispatch) => {
    return{

        addPost: (postText) => {
            dispatch(addPostActionCreator(postText));
        }
    }
}
const ReduxProfileBarsContainer = connect(mapStateToProps, mapDispatchToProps)(ProfileBars);
export default ReduxProfileBarsContainer;