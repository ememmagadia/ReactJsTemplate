import React from "react";
import { render } from "react-dom";

import {Router, Route} from "react-router";

import { Root } from "./components/Root"
import { Home } from "./components/Home"

class App extends React.Component {
    
    render() {
        return (
           <Router></Router>
            // <Root>
            //     <Home></Home>
            // </Root>
        );
    }
}

render(<App />, window.document.getElementById("app"));