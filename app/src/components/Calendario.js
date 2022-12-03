import React, {useState} from 'react';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const Dates = () => {

    const [startDate, setStartDate] = useState(new Date());
    const ExampleCustomTimeInput = ({ date, value, onChange }) => (
    <input
        value={value}
        onChange={(e) => onChange(e.target.value)}
        style={{ border: "solid 1px pink" }}
    />
);

    return(
        <>
            <DatePicker
                selected={startDate}
                onChange={(date) => setStartDate(date)}
                showTimeInput
                customTimeInput={<ExampleCustomTimeInput />}
            />
        </>
    );
};

export default Dates;