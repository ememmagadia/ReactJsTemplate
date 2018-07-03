import React from "react";

import { Header } from "./Header";

export class Root extends React.Component {
    render() {
        return (
            <div className="container">
                <h3>The user page</h3>
                <p>User Id: </p>
            </div>
        );
    }
}
