import { Fragment } from "react";
import { useState } from "react";

import DropDown from "../UI/Dropdown";

const Header = () => {
    const [visibility, setVisibility] = useState(false);

    const clickHandler = setVisibility(!visibility)

    return (
        
        <Fragment>
            <button onClick={clickHandler}>
                Header
            </button>
            <DropDown dropDownVisibility={visibility}>
                <ul>
                    <li>Kitchen</li>
                    <li>Power</li>
                </ul>
            </DropDown>
        </Fragment>  
        
    )
}
export default Header;