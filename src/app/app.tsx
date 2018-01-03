import React, { Component } from "react";
import styled from "styled-components";

const Button = styled.button`
    font-size: 1em;
    margin: 1em;
    padding: 0.25em 1em;
    border: 2px solid palevioletred;
    border-radius: 3px;

    &:hover {
        display: flex;
    }
`;

export default class App extends Component<any, any> {
    public render() {
        return <Button> Hello</Button>;
    }

    private you() {
        const u = 8;
    }
}
