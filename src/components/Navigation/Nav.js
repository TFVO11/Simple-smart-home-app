import { Fragment } from "react";
import { Link } from "react-router-dom";

import navigateLight from "./navigateLight";
import navigateTemperature from "./navigateTemperature";


const Nav = () => {

    
return (
<nav>
    <Link to="/navigateLight">Light</Link>
    <Link to="/navigateTemperature">Temperrature</Link>
    <Link to="/navigateOven">Oven</Link>
    <Link to="/navigateRefrigerator">Refrigerator</Link>
    <Link to="/navigateWater">Water</Link>
</nav>
)
}

export default Nav;