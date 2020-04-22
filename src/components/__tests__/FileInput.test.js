import React from "react";
import { shallow } from "enzyme";
import { FileInput } from "../FileInput";

let subject;
let name;

describe("FileInput", () => {
  beforeEach(() => {
    name = "test";
    subject = shallow(<FileInput name={name} />);
  });

  describe("render", () => {
    it("renders correctly", () => {
      const label = subject.find("label");
      expect(label).toHaveLength(1);
      expect(label.prop("htmlFor")).toEqual(name);
      const input = subject.find("input[type='file']");
      expect(input).toHaveLength(1);
      expect(input.prop("name")).toEqual(name);
      expect(input.prop("id")).toEqual(name);
    });
  });
});
