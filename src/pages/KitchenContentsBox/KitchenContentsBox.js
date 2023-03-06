import { Switch, Route } from "react-router-dom";

import Light from "../../components/contents/Light";
import Oven from "../../components/contents/oven";
import Temperature from "../../components/contents/temperature";
import Card from "../../components/UI/Card";
import KitchenNav from "../../components/Navigation/KitchenNav";
import Wrapper from "../../layouts/ContentLayout/Wrapper";
import classes from "./KitchenContentsBox.module.css";

const KitchencontentsBox = () => {
    return (
        <div className={classes.kitchencontentsbox}>
            <div>
                <KitchenNav />
            </div>
            <div>
                <Switch>
                    <Route path="/KitchenContentsBox/light" component={Light} />
                    <Route
                        exact
                        path="/KitchenContentsBox/temperature"
                        component={Temperature}
                    />
                    <Route path="/KitchenContentsBox/oven" component={Oven} />
                </Switch>
            </div>
        </div>
    );
};

export default KitchencontentsBox;
