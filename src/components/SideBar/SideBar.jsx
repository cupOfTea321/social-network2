import s from './SideBar.module.css'
import {NavLink} from "react-router-dom";
import { FaDiscourse, FaQq, FaCanadianMapleLeaf } from 'react-icons/fa';
import { FaEllo } from 'react-icons/fa';
const SideBar = () => {
    const setActive = ({isActive}) => isActive ? s.activeLink : s.link;
    const st = {display: 'flex', alignItems:'center', marginRight: 20};
    const iconSt = {marginLeft: 10, fontSize: 24, marginTop: 8}
    return(
        <div className={s.side_bar}>
            <div className={s.new_feeds}>
                <p className="grey_text">New Feeds</p>
                {/*<NavLink className={s.link} to="#s">Newsfeed</NavLink>*/}
                <NavLink style={st} className = { setActive } to="/dialogs">
                    Messages
                    <FaDiscourse style={iconSt}/>
                </NavLink>
                {/*<NavLink className={s.link} to="#s">Explore Stories</NavLink>*/}

                <NavLink to="/profile" className = { setActive }>
                    Profile
                    <FaQq style={iconSt}/>
                </NavLink>
                <NavLink style={st} to="/friends" className = { setActive }>
                    Friends
                    <FaEllo style={iconSt}/>
                </NavLink>
                <NavLink  style={st} className={ setActive } to="/techno">
                    Technologies
                    <FaCanadianMapleLeaf style={iconSt}/>
                </NavLink>

            </div>
        </div>
        );

}

export default SideBar;