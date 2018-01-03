import { Action, Dispatch, Middleware, MiddlewareAPI } from "redux";

export type Thunk<S, O> = (dispatch: Dispatch<S>, getState: () => S) => O;

export interface IThunkDispatch<S> extends Dispatch<S> {
    <A extends Action, B>(action: A | Thunk<S, B>): B | Action;
}

export const thunkMiddleware: Middleware = <S>({ dispatch, getState }: MiddlewareAPI<S>) => {
    return (next: IThunkDispatch<S>): IThunkDispatch<S> => {
        return <A extends Action, B>(action: A | Thunk<S, B>): B | Action => {
            return typeof action === "function" ? action(dispatch, getState) : next(action);
        };
    };
};
