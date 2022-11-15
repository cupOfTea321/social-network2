
import React from "react";
import {addMessActionCreator} from "../../../Redux/dialogs_reducer";
import Dialogs from "./Dialogs";
import storeContext from "./../../../storeContext"

const DialogsContainer = (props) => {

    return(
        <storeContext.Consumer>
            {
            (store) => {
            let state = store.getState();
            let send_mess = (text) => {
                let action = addMessActionCreator(text);
                store.dispatch(action);

            }
            return <Dialogs
                dialogs={state.dialogsPage.dialogs}
                messages={state.dialogsPage.messages}
                sendMess={send_mess}
            />}
        }

        </storeContext.Consumer>
    );
}

export default DialogsContainer;