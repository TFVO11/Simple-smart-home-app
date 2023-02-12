import { Fragment } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Header from "./components/Header/Header";
import KitchenContentsBox from "./components/contents/KitchenContentsBox";
import PowerContentsBox from "./components/contents/PowerContentsBox";


const App = () => {
    return (

    <BrowserRouter>
       <Header/>
       <Switch>
        <Route exact path='/KitchenContentsBox' element={<KitchenContentsBox/>} />
        <Route exact path='/PowerContentsBox' element={<PowerContentsBox/>} />
       </Switch>
    </BrowserRouter>
    )

};

export default App;