import classes from './Header.module.css';
import {NavLink} from "react-router-dom";
import { FaBootstrap, FaHtml5, FaCss3Alt, FaReact, FaJsSquare } from 'react-icons/fa';


const Header = (props) => {

    return(
    <header>
        <div className={classes.h1}>FlexMess.</div>
        <div className={classes.h2}>
            <input placeholder="Search for..."/>
        </div>

        <div className={classes.h3}>
            <span>
                Technologies:
            </span>
            <span className={classes.icons}>
                <NavLink to={'/techno'}><FaHtml5/></NavLink>
                <NavLink to={'/techno'}><FaBootstrap/></NavLink>
                <NavLink to={'/techno'}><FaCss3Alt/></NavLink>
                <NavLink to={'/techno'}><FaReact/></NavLink>
                <NavLink to={'/techno'}><FaJsSquare/></NavLink>
            </span>

        </div>

        <div className={classes.h4}>
            {props.isAuth ? <div>
                {props.login} - <button onClick={props.logout}>Log out</button>
            </div>  : <NavLink to={'/login/'}>Login</NavLink>}


        </div>
    </header>
    );

}

export default Header;