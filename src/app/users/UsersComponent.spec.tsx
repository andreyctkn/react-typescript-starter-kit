import { shallow, ShallowWrapper } from "enzyme";
import React from "react";
import { UsersComponent } from "./UsersComponent";

describe("UsersComponent", () => {
    it("simple check render", () => {
        const usersComponent: ShallowWrapper = shallow(<UsersComponent />);
        expect(usersComponent.contains(<div>UsersPage</div>)).toBeTruthy();
    });
});
