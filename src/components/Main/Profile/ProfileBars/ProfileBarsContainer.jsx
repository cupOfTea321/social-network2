

import {addPostActionCreator, changeTextPostActionCreator} from "../../../../Redux/profile_reducer";
import ProfileBars from "./ProfileBars";

import {connect} from "react-redux";



let mapStateToProps = (state) => {
    return{
        posts: state.profilePage.likeCount

    }
}
let mapDispatchToProps = (dispatch) => {
    return{
        updatePostText: (text) => {
            let action = changeTextPostActionCreator(text);
            dispatch(action);
        },
        addPost: () => {
            dispatch(addPostActionCreator());
        }
    }
}
const ReduxProfileBarsContainer = connect(mapStateToProps, mapDispatchToProps)(ProfileBars);
export default ReduxProfileBarsContainer;