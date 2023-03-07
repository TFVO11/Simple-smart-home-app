import { Switch, Route } from "react-router-dom";

import PowerNav from "../../components/Navigation/MonthlyElectricityUsageNav";
import classes from "./PowerContentsBox.module.css";
import MonthlyUsage from "./MonthlyUsage/MonthlyUsage";
import Wrapper from "../../layouts/ContentLayout/Wrapper";

const PowerContentsBox = () => {
    return (
        <div className={classes.powercontentsbox}>
            <div>
                <PowerNav />
            </div>
            <div style={{ height: "100px" }} />
            <div>
                <Wrapper>
                    <Switch>
                        <Route
                            exact
                            path="/PowerContentsBox/:monthId"
                            component={MonthlyUsage}
                        />
                    </Switch>
                </Wrapper>
            </div>
        </div>
    );
};

export default PowerContentsBox;
