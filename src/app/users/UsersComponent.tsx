import { css } from "emotion";
import React, { Component } from "react";

export const containerClass = css`
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: antiquewhite;
`;

export class UsersComponent extends Component {
    public render(): JSX.Element {
        return <div className={containerClass}>UsersPage</div>;
    }
}
