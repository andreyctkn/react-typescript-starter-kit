import { shallow, ShallowWrapper } from "enzyme";
import React from "react";
import { containerClass, UsersComponent } from "./UsersComponent";

describe("UsersComponent", () => {
    it("simple check render", () => {
        const usersComponent: ShallowWrapper = shallow(<UsersComponent />);
        expect(usersComponent.contains(<div className={containerClass}>UsersPage</div>)).toBeTruthy();
    });
});
