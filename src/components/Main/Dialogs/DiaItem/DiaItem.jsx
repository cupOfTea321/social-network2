import d from './../Dialogs.module.css'
import {NavLink} from "react-router-dom";

const DiaItem = (props) => {

    let path = '/dialogs/' +  props.id;
    return(
        <div className={`${d.messList} + ${d.active} `}>
            <button>
                <NavLink to={ path }>{props.name}</NavLink>
            </button>


        </div>

    );
}



export default DiaItem;