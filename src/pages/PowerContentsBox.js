import { Switch, Route } from 'react-router-dom';

import PowerNav from "../../src/components/Navigation/MonthlyElectricityUsageNav.js";
import MonthlyUsage from './MonthlyUsage/MonthlyUsage';
import classes from './PowerContentsBox.module.css';


const PowerContentsBox = () => {
    return (
        <div>
            <div>
                <PowerNav />
            </div>
            <div>
                <Switch>
                    <Route exact path='/PowerContentsBox/:monthlyId' component={MonthlyUsage} />
                </Switch>
            </div>
        </div>
    )
}

export default PowerContentsBox;