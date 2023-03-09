import { Fragment } from "react";
import { useState } from "react";
import { Link } from 'react-router-dom';

import DropDown from "../../components/UI/Dropdown";
import classes from './Header.module.css';

const Header = () => {
    const [visibility, setVisibility] = useState(false);

    const clickHandler = () => {
        setVisibility(!visibility)
    }


    return (
        
        <div className={classes.headerbox} >
            <button className={classes.Button} onClick={clickHandler}>
                Header
            </button>
            <DropDown dropDownVisibility={visibility}>
                <ul className={classes.headerlistbox}>

                    <li><a href='/KitchenContentsBox/*'>Kitchen</a></li>
                    <li><a href='/PowerContentsBox/*'>Power</a></li>
                </ul>
            </DropDown>
        </div>  
        
    )
}
export default Header;
