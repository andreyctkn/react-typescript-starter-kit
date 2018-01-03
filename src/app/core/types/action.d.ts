import { Action as ReduxBaseAction } from "redux";

export type ApiActionStates = "start" | "done";

export interface ActionMetadata {
    [key: string]: CallApi | any;
}

export interface IAction extends ReduxBaseAction {
    error?: any;
    meta?: ActionMetadata;
    payload?: any;
    sequence?: ApiActionStates;
}
