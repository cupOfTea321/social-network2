import d from './Dialogs.module.css'

import DiaItem from "./DiaItem/DiaItem";
import MessItem from "./MessItem/MessItem";


const Dialogs = (props) => {
    // debugger;
    let dialogsElement =props.allData.dialogs
        .map(dialog => <DiaItem id={dialog.id}  name={dialog.name}/>)
    let messElement = props.allData.messages
        .map(m => <MessItem id={m.id} message={m.message}/>)
    return(
        <main className={d.main_dialogs}>
            <div className={d.messages_block}>
                <p>сообщения</p>
                {messElement}
            </div>
            <div className={d.dialogs_block}>
                <p>диалоги</p>
                {dialogsElement}
            </div>
        </main>
    );
}

export default Dialogs;