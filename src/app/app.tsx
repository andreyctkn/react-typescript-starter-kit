import React, { Component } from "react";
import styled from "styled-components";

const Button = styled.a`
    display: inline-block;
    border-radius: 3px;
    padding: 0.5rem 0;
    margin: 0.5rem 1rem;
    width: 11rem;
    background: transparent;
    color: white;
    border: 2px solid white;
`;

export default class App extends Component<any, any> {
    public render() {
        return <Button> Hello</Button>;
    }

    private you() {
        const u = 8;
    }
}
