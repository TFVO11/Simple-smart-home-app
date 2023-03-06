import { Switch, Route } from "react-router-dom";
import Wrapper from "../../layouts/ContentLayout/Wrapper";

import PowerNav from "../../components/Navigation/MonthlyElectricityUsageNav";
import Card from "../../components/UI/Card";
import January from "../../components/month/January";
import Febuary from "../../components/month/February";
import March from "../../components/month/March";
import Aprill from "../../components/month/Aprill";
import May from "../../components/month/May";
import June from "../../components/month/June";
import July from "../../components/month/July";
import August from "../../components/month/August";
import Septmeber from "../../components/month/September";
import October from "../../components/month/October";
import November from "../../components/month/November";
import December from "../../components/month/December";
import classes from "./PowerContentsBox.module.css";

const PowerContentsBox = () => {
    return (
        <div className={classes.powercontentsbox}>
            <div>
                <PowerNav />
            </div>
            <div>
                <Switch>
                    <Route
                        exact
                        path="/PowerContentsBox/January"
                        component={January}
                    />
                    <Route
                        path="/PowerContentsBox/Febuary"
                        component={Febuary}
                    />
                    <Route path="/PowerContentsBox/March" component={March} />
                    <Route path="/PowerContentsBox/Aprill" component={Aprill} />
                    <Route path="/PowerContentsBox/May" component={May} />
                    <Route path="/PowerContentsBox/June" component={June} />
                    <Route path="/PowerContentsBox/July" component={July} />
                    <Route path="/PowerContentsBox/August" component={August} />
                    <Route
                        path="/PowerContentsBox/Septmeber"
                        component={Septmeber}
                    />
                    <Route
                        path="/PowerContentsBox/October"
                        component={October}
                    />
                    <Route
                        path="/PowerContentsBox/November"
                        component={November}
                    />
                    <Route
                        path="/PowerContentsBox/December"
                        component={December}
                    />
                </Switch>
            </div>
        </div>
    );
};

export default PowerContentsBox;
