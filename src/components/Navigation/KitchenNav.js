import Wrapper from "../../layouts/ContentLayout/Wrapper";
import classes from "./KitchenNav.module.css";

const KitchenNav = () => {
    return (
        <ul className={classes.kitchennav}>
            <Wrapper>
                <li>
                    <a href="/KitchenContentsBox/temperature">temperature</a>
                </li>
                <li>
                    <a href="/KitchenContentsBox/light">Light</a>
                </li>
                <li>
                    <a href="/KitchenContentsBox/oven">oven</a>
                </li>
            </Wrapper>
        </ul>
    );
};

export default KitchenNav;
