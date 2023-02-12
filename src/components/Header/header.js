import { Fragment } from "react";
import { useState } from "react";
import { Link } from 'react-router-dom';

import DropDown from "../UI/Dropdown";

const Header = () => {
    const [visibility, setVisibility] = useState(false);

    const clickHandler = () => {
        setVisibility(!visibility)
    }


    return (
        
        <Fragment>
            <button onClick={clickHandler}>
                Header
            </button>
            <DropDown dropDownVisibility={visibility}>
                <ul>
                    <li><Link to='/KitchenContentsBox'>Kitchen</Link></li>
                    <li><Link to='/PowerContentsBox'>Power</Link></li>
                </ul>
            </DropDown>
        </Fragment>  
        
    )
}
export default Header;