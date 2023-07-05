import React from "react";
import { shallow } from "enzyme";
import TodoListItem from "./TodoListItem";

describe("TodoListItem", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<TodoListItem />);
    expect(wrapper).toMatchSnapshot();
  });
});
