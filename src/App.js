import { Fragment } from "react";

import Header from "./components/Header/Header";
import Nav from "./components/Navigation/Nav";
import contentsBox from "./components/contents/contentsBox";



const App = () => {
    return (
        <Fragment>
            <Header />
            <Nav />
            <contentsBox />
        </Fragment>
    )

};

export default App;