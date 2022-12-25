import d from './Dialogs.module.css'

import DiaItem from "./DiaItem/DiaItem";
import MessItem from "./MessItem/MessItem";
import React from "react";
import {Navigate} from "react-router-dom";
import {Field, reduxForm} from "redux-form";


const Dialogs = (props) => {
    // debugger;
    let dialogsElement =props.dialogs
        .map(dialog => <DiaItem id={dialog.id} key={dialog.id} name={dialog.name}/>)
    let messElement = props.messages
        .map(m => <MessItem id={m.id} key={m.id} message={m.message}/>)


    let addNewMess = (values) => {
        props.sendMess(values.mess);
        values.mess = ''
    }

    if(props.isAuth === false) return <Navigate to={'/login'}/>;
    return(
        <main className={d.main_dialogs}>
            <div className={d.messages_block}>
                <p>сообщения</p>
                {messElement}
                <MessReduxForm onSubmit={addNewMess}/>

            </div>
            <div className={d.dialogs_block}>
                <p>диалоги</p>
                {dialogsElement}

            </div>
        </main>
    );
}
const MessForm = (props) => {
    return(
        <form onSubmit={props.handleSubmit}>
            <Field component={"textarea"} name={"mess"} placeholder="type your message..."></Field>
            <button >Send mess</button>
        </form>
    )
}
// Функция, возвращающая НОС
const MessReduxForm = reduxForm({
    // a unique name for the form
    form: 'mess'
})(MessForm)
export default Dialogs;