import s from './SideBar.module.css'
import {NavLink} from "react-router-dom";
import { FaDiscourse, FaQq } from 'react-icons/fa';
import { FaEllo } from 'react-icons/fa';
const SideBar = () => {
    const setActive = ({isActive}) => isActive ? s.activeLink : s.link;
    const st = {display: 'flex', alignItems:'center', marginRight: 20};
    return(
        <div className={s.side_bar}>
            <div className={s.new_feeds}>
                <p className="grey_text">New Feeds</p>
                {/*<NavLink className={s.link} to="#s">Newsfeed</NavLink>*/}
                <NavLink style={st} className = { setActive } to="/dialogs">
                    Messages
                    <FaDiscourse style={{marginLeft: 10}}/>
                </NavLink>
                {/*<NavLink className={s.link} to="#s">Explore Stories</NavLink>*/}
                {/*<NavLink className={s.link} to="#s">Popular Groups</NavLink>*/}
                <NavLink to="/profile" className = { setActive }>
                    Profile
                    <FaQq style={{marginLeft: 10}}/>
                </NavLink>
                <NavLink style={st} to="/friends" className = { setActive }>
                    Friends
                    <FaEllo style={{marginLeft: 10}}/>
                </NavLink>

            </div>
        </div>
        );

}

export default SideBar;