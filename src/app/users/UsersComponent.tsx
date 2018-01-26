import React, { Component } from "react";
import { RouteComponentProps } from "react-router-dom";

export class UsersComponent extends Component<RouteComponentProps<{}>> {
    public render(): JSX.Element {
        console.info(this.props.history);
        return <div>UsersPage</div>;
    }
}
