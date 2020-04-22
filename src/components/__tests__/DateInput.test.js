import React from "react";
import { shallow, mount } from "enzyme";
import { formatDate, parseDate } from "react-day-picker/moment";
import DayPickerInput from "react-day-picker/DayPickerInput";
import { DateInput } from "../DateInput";

let subject;
let name;
let value;
let onChange;

describe("DateInput", () => {
  beforeEach(() => {
    name = "test";
    value = "04/22/2020";
    onChange = jest.fn();
    subject = shallow(
      <DateInput name={name} value={value} onChange={onChange} />
    );
  });

  describe("render", () => {
    it("renders correctly", () => {
      const label = subject.find("label");
      expect(label).toHaveLength(1);
      expect(label.prop("htmlFor")).toEqual(name);

      const dayPicker = subject.find(DayPickerInput);
      expect(dayPicker).toHaveLength(1);
      expect(dayPicker.prop("name")).toEqual(name);
      expect(dayPicker.prop("onDayChange")).toEqual(expect.any(Function));
    });
  });

  describe("onChange", () => {
    let newValue;

    beforeEach(() => {
      name = "test";
      value = "04/22/2020";
      onChange = jest.fn();
      subject = mount(
        <DateInput name={name} value={value} onChange={onChange} />
      );

      newValue = "03/07/2020";
      const dayPicker = subject.find(DayPickerInput).first();
      const input = dayPicker.find("input").first();
      input.simulate("change", { target: { value: newValue } });
    });

    it("formats the date", () => {
      expect(onChange).toHaveBeenCalledWith(newValue);
    });
  });
});
