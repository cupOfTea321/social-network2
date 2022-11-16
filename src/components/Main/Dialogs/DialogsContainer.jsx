

import {addMessActionCreator} from "../../../Redux/dialogs_reducer";
import Dialogs from "./Dialogs";

import {connect} from "react-redux";



let mapStateToProps = (state) => {
    return{
        dialogs: state.dialogsPage.dialogs,
        messages: state.dialogsPage.messages
    }
}
let mapDispatchToProps = (dispatch) => {
    return{
        sendMess: (text) => {
            let action = addMessActionCreator(text);
            dispatch(action);
        }
    }
}
const ReduxDialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);
export default ReduxDialogsContainer;