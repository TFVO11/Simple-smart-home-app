import { Fragment } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Header from "./layouts/Header/Header";
import KitchenContentsBox from "./pages/KitchenContentsBox/KitchenContentsBox";
import PowerContentsBox from "./pages/PowerContentsBox/PowerContentsBox";

const App = () => {
    return (
        <Fragment>
            <div>
                <Header />
            </div>
            <div>
                <Switch>
                    <Route
                        exact
                        path="/KitchenContentsBox/*"
                        component={KitchenContentsBox}
                    ></Route>
                    <Route
                        path="/PowerContentsBox"
                        component={PowerContentsBox}
                    ></Route>
                </Switch>
            </div>
        </Fragment>
    );
};

export default App;
