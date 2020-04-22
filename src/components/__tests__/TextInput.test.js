import React from "react";
import { shallow } from "enzyme";
import { TextInput } from "../TextInput";

let subject;
let name;
let value;
let placeholder;
let onChange;

describe("TextInput", () => {
  beforeEach(() => {
    name = "test";
    value = "testValue";
    placeholder = "placeholder value";
    onChange = jest.fn();

    subject = shallow(
      <TextInput
        name={name}
        value={value}
        placeholder={placeholder}
        onChange={onChange}
      />
    );
  });

  describe("render", () => {
    it("renders correctly", () => {
      const label = subject.find("label");
      expect(label).toHaveLength(1);
      expect(label.prop("htmlFor")).toEqual(name);
      const input = subject.find("input[type='text']");
      expect(input).toHaveLength(1);
      expect(input.prop("name")).toEqual(name);
      expect(input.prop("id")).toEqual(name);
      expect(input.prop("value")).toEqual(value);
      expect(input.prop("placeholder")).toEqual(placeholder);
      expect(input.prop("onChange")).toEqual(onChange);
    });
  });
});
