
import React from "react";
import {addMessActionCreator} from "../../../Redux/dialogs_reducer";
import Dialogs from "./Dialogs";

const DialogsContainer = (props) => {
    let send_mess = (text) => {
        let action = addMessActionCreator(text);
        props.dispatch(action);

    }
    return(
        <Dialogs
            dialogs={props.state.dialogsPage.dialogs}
            messages={props.state.dialogsPage.messages}
            sendMess={send_mess}
        />
    );
}

export default DialogsContainer;