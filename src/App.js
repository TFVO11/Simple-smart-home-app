import { Fragment } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Header from "./components/Header/Header";
import KitchenContentsBox from "./components/contents/KitchenContentsBox";
import PowerContentsBox from "./components/contents/PowerContentsBox";
import KitchenNav from "./components/Navigation/KitchenNav";
import PowerNav from "./components/Navigation/PowerNav";
import Card from "./components/UI/Card";


const App = () => {
    return (
<Fragment>
    <div>
        <Header />
        </div>
        <div>
       <Switch>
        <Route exact path='/KitchenContentsBox/*' component={KitchenContentsBox}></Route>
        <Route path='/PowerContentsBox/*' component={PowerContentsBox}></Route>
        </Switch>
    </div>
</Fragment>
    )

};

export default App;