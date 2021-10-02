import React from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const DateSelector = ({ selectedDate, setSelectedDate }) => {
  //   const [selectedDate, setSelectedDate] = useState(null);
  return (
    <div>
      <DatePicker
        selected={selectedDate}
        onChange={(date) => setSelectedDate(date)}
        dateFormat="MM-dd"
        minDate={new Date()}
        placeholderText="Pick a Start Date"
        showYearDropdown={true}
        showMonthDropdown={true}
        showPopperArrow={false}
        dropdownMode="select"
      />
    </div>
  );
};

export default DateSelector;
