import { Fragment } from "react";
import { Switch, Route } from "react-router-dom";

import Header from '../src/layouts/Header/Header.js'
import KitchenContentsBox from "../src/pages/KitchenContentsBox";
import PowerContentsBox from "../src/pages/PowerContentsBox";



const App = () => {
    return (
        <Fragment>
            <div>
                <Header />
            </div>
            <div>
                <Switch>
                    <Route path='/KitchenContentsBox/*' component={KitchenContentsBox}></Route>
                    <Route path='/PowerContentsBox/*' component={PowerContentsBox}></Route>
                </Switch>
            </div>
        </Fragment>
    )

};

export default App;