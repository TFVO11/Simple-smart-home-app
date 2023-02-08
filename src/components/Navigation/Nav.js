import { Fragment } from "react";

import navigateLight from "./navigateLight";
import navigateTemperature from "./navigateTemperature";


const Nav = () => {

    
return (
<nav>
    <a href="/navigateLight">Light</a>
    <a href="/navigateTemperature">Temperrature</a>
    <a href="/navigateOven">Oven</a>
    <a href="/navigateRefrigerator">Refrigerator</a>
    <a href="/navigateWater">Water</a>
</nav>
)
}

export default Nav;