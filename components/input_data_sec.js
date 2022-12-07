import sort_sec from "./sort_sec";
import filter_sec from "./filter_sec";


export default function Input_data_sec() {
  return (
    <div className="container">
      <p>insert a date in a form of YYYY-MM-DD .</p>
      <label for="date">date:</label>
      <input type="date" id="date-input" name="date-input"><br></br></input>
      <button id="submit-button">
        submit
      </button>
    </div>
  );
}