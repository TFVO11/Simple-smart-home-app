import { Fragment } from "react";
import { BrowserRouter } from "react-router-dom";

import Header from "./components/Header/Header";
import Nav from "./components/Navigation/Nav";
import contentsBox from "./components/contents/contentsBox";



const App = () => {
    return (
        <BrowserRouter>
        <Fragment>
            <Header />
            <Nav />
            <contentsBox />
        </Fragment>
        </BrowserRouter>
    )

};

export default App;