import FilterSec from "./filter_sec";
import SortSec from "./sort_sec";
import { useState } from "react";


export default function InputDataSec() {
  const [dateValue, setDateValue] = useState(null);

  function handleDateUpdate(e) {
    const dateValue = e.target.value;
    console.log("dateValue", dateValue);
    setDateValue(dateValue);  // state variable updated here
  }
  return (
    <div className="content">
      <p>insert a date in a form of YYYY-MM-DD .</p>
      <span>Insert a date: </span>
      <input type="date" onChange={(e) => handleDateUpdate(e)} />
      
      <button id="submit-button">
        submit
      </button>
      <SortSec />
      <FilterSec />
    </div>
  );
}