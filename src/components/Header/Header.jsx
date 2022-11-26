import classes from './Header.module.css';
import {NavLink} from "react-router-dom";


const Header = (props) => {
// debugger
    return(
    <header>
        <div className={classes.h1}>FlexMess.</div>
        <div className={classes.h2}>
            <input placeholder="Search for..."/>
        </div>
        <div className={classes.h3}>pages</div>
        <div className={classes.h4}>
            {props.isAuth ? props.login :
                <NavLink to={'/login'}>Login</NavLink>
            }


        </div>
    </header>
    );

}

export default Header;