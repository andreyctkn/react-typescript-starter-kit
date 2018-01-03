import { IThunkDispatch, thunkMiddleware } from "./thunk";
import { Action, MiddlewareAPI } from "redux";

// modify unit tests from https://github.com/gaearon/redux-thunk/blob/master/test/index.js
describe("thunk middleware", () => {
    let doDispatch: IThunkDispatch<any>,
        doGetState: () => any,
        nextHandler: (next: IThunkDispatch<any>) => IThunkDispatch<any>;

    beforeEach(() => {
        doDispatch = jest.fn();
        doGetState = jest.fn();
        nextHandler = thunkMiddleware({
            dispatch: doDispatch,
            getState: doGetState,
        } as MiddlewareAPI<any>);
    });

    it("must return a function to handle next", () => {
        expect(nextHandler).toBeInstanceOf(Function);
        expect(nextHandler.length).toEqual(1);
    });

    describe("handle next", () => {
        it("must return a function to handle action", () => {
            const actionHandler = nextHandler(null);

            expect(actionHandler).toBeInstanceOf(Function);
            expect(actionHandler.length).toEqual(1);
        });
    });

    describe("handle action", () => {
        it("must run the given action function with dispatch and getState", () => {
            const actionHandler = nextHandler(null);

            actionHandler((dispatch, getState) => {
                expect(dispatch).toEqual(doDispatch);
                expect(getState).toEqual(doGetState);
            });
        });

        it("must pass action to next if not a function", () => {
            const actionObj = { type: "@test" };

            const actionHandler = nextHandler((action: Action) => {
                expect(action).toEqual(actionObj);
            });

            actionHandler(actionObj);
        });

        it("must return the return value of next if not a function", () => {
            const expected = "redux";
            const actionHandler = nextHandler(() => expected);

            const outcome = actionHandler(null);
            expect(outcome).toEqual(expected);
        });

        it("must return value as expected if a function", () => {
            const expected = "rocks";
            const actionHandler = nextHandler(null);

            const outcome = actionHandler(() => expected);
            expect(outcome).toEqual(expected);
        });

        it("must be invoked synchronously if a function", () => {
            const actionHandler = nextHandler(null);
            let mutated = 0;

            actionHandler(() => mutated++);
            expect(mutated).toEqual(1);
        });
    });

    describe("handle errors", () => {
        it("must throw if argument is non-object", () => {
            expect(() => {
                thunkMiddleware(null);
            }).toThrow("Cannot read property 'dispatch' of null");
        });
    });
});
