import d from './Dialogs.module.css'

import DiaItem from "./DiaItem/DiaItem";
import MessItem from "./MessItem/MessItem";
import React from "react";

const Dialogs = (props) => {
    // debugger;
    let dialogsElement =props.state.dialogsPage.dialogs
        .map(dialog => <DiaItem id={dialog.id}  name={dialog.name}/>)
    let messElement = props.state.dialogsPage.messages
        .map(m => <MessItem id={m.id} message={m.message}/>)

    let type_mess = React.createRef();
    let send_mess = () => {
        let text = type_mess.current.value;
        props.addMess(text);
        type_mess.current.value = '';
    }
    return(
        <main className={d.main_dialogs}>
            <div className={d.messages_block}>
                <p>сообщения</p>
                {messElement}
                <textarea ref={type_mess} placeholder="type your message..."></textarea>
                <button onClick={send_mess}>Send mess</button>
            </div>
            <div className={d.dialogs_block}>
                <p>диалоги</p>
                {dialogsElement}

            </div>
        </main>
    );
}

export default Dialogs;