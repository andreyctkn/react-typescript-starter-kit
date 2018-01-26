import React, { Component } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import { UsersComponent } from "./users";

export default class App extends Component {
    public render(): JSX.Element {
        return (
            <BrowserRouter>
                <Route path="/" component={UsersComponent} />
            </BrowserRouter>
        );
    }
}
