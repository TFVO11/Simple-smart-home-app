import { Switch, Route } from 'react-router-dom';
import Wrapper from '../Helpers/Wrapper';

import PowerNav from "../Navigation/PowerNav";
import Card from "../UI/Card";
import January from "../month/January";
import Febuary from "../month/February";
import March from "../month/March";
import Aprill from '../month/Aprill';
import May from "../month/May";
import June from '../month/June';
import July from "../month/July";   
import August from "../month/August";
import Septmeber from "../month/September";
import October from "../month/October";
import November from "../month/November";
import December from '../month/December';
import classes from './PowerContentsBox.module.css';

const PowerContentsBox = () => {
    return(
        <div className={classes.powercontentsbox}>
    <div>
    <PowerNav />
    </div>
    <div>
    <Switch>
        <Route exact path='/PowerContentsBox/January' component={January}/>
        <Route path='/PowerContentsBox/Febuary' component={Febuary}/>
        <Route path='/PowerContentsBox/March' component={March}/>
        <Route path='/PowerContentsBox/Aprill' component={Aprill}/>
        <Route path='/PowerContentsBox/May' component={May}/>
        <Route path='/PowerContentsBox/June' component={June}/>
        <Route path='/PowerContentsBox/July' component={July}/>
        <Route path='/PowerContentsBox/August' component={August}/>
        <Route path='/PowerContentsBox/Septmeber' component={Septmeber}/>
        <Route path='/PowerContentsBox/October' component={October}/>
        <Route path='/PowerContentsBox/November' component={November}/>
        <Route path='/PowerContentsBox/December' component={December}/>
    </Switch>
    </div>
    </div>
)
}

export default PowerContentsBox;