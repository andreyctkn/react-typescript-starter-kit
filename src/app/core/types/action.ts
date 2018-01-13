import { Action as ReduxBaseAction } from "redux";

export type ApiActionStates = "start" | "done";

export interface IActionMetadata {
    [key: string]: any;
}

export interface IAction extends ReduxBaseAction {
    error?: any;
    meta?: IActionMetadata;
    payload?: any;
    sequence?: ApiActionStates;
}
