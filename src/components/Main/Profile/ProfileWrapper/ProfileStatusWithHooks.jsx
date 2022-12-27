import React, {useEffect, useState} from "react";
import {setStatus} from "../../../../Redux/profile_reducer";


const ProfileStatusWithHooks = (props) =>  {
    // let stateWithSetState = useState(true);
    // let editMode = stateWithSetState[0];
    // let setEditMode = stateWithSetState[1];
    let [editMode, setEditMode] = useState(false);


    const activateEditMode = () => {
        setEditMode(true)
    }
    const deactivateEditMode = () => {
            setEditMode(false)
            props.updateStatus(status)
        }

    let [status, getStatus] = useState(props.status);

    const onStatusChange = (e) => {
        getStatus(e.currentTarget.value)

    }

    // Синхронизация состояния
    useEffect(() => {
        setStatus(props.status);
    }, [props.status]);

        return(
            <div>
                {!editMode &&
                    <p onDoubleClick={activateEditMode} className="grey_text">{props.status || "----"} </p>
                }
                {editMode &&
                    <input onChange={onStatusChange} autoFocus={true}
                           onBlur={() => {deactivateEditMode()} } value={status}/>
                }
            </div>
        )

}
export default ProfileStatusWithHooks;
