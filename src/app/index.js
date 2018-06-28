import React from "react";
import { render } from "react-dom";

import { Header } from "./components/Header"
import { Home } from "./components/Home"

class App extends React.Component {
    onGreet = () => {
        alert("Hello!");
    }
    render() {
        var user = {
            Name: "Emmanuel Magadia",
            Age: 23,
            Position: "SE1",
            Hobbies:["Basketball", "Games"]           
        };
        return (
            <div className="container">
                <div className="row">
                    <div className="col-xs-10 col-xs-offset-1">
                        <Header />
                    </div>
                </div>
                <div className="row">
                    <div className="col-xs-10 col-xs-offset-1">
                        <Home age={27} user={user} greet={this.onGreet}/>
                    </div>
                </div>
            </div>
        );
    }
}

render(<App />, window.document.getElementById("app"));