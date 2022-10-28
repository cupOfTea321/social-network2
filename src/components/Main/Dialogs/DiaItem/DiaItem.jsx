import d from './../Dialogs.module.css'
import {NavLink} from "react-router-dom";

const DiaItem = (props) => {
    let path = '/dialogs/' +  props.id;
    return(
        <div className={`${d.messList} + ${d.active} `}>
            <NavLink to={ path }>{props.name}</NavLink>

        </div>
    );
}



export default DiaItem;