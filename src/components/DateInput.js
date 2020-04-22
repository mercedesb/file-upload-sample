import React from "react";
import DayPickerInput from "react-day-picker/DayPickerInput";
import { formatDate, parseDate } from "react-day-picker/moment";
import "react-day-picker/lib/style.css";
import PropTypes from "prop-types";

export function DateInput({ name, value, onChange }) {
  const DATE_FORMAT = "MM/DD/YYYY";

  const handleChange = (day) => {
    onChange(formatDate(day, DATE_FORMAT));
  };

  return (
    <div className="input">
      <label htmlFor={name}>{name}</label>

      <DayPickerInput
        name={name}
        onDayChange={handleChange}
        value={!!value ? parseDate(value) : undefined}
        selectedDay={!!value ? parseDate(value) : undefined}
        formatDate={formatDate}
        parseDate={parseDate}
        format={DATE_FORMAT}
        placeholder={`${formatDate(new Date(), DATE_FORMAT)}`}
      />
    </div>
  );
}

DateInput.propTypes = {
  name: PropTypes.string,
  value: PropTypes.string,
  onChange: PropTypes.func,
};
