import sort_sec from "./sort_sec";
import filter_sec from "./filter_sec";


export default function Layout({ children }) {
  return (
    <div class="content">
      <p>insert a date in a form of YYYY-MM-DD .</p>
      <label for="date">date:</label>
      <input type="text" id="date-input" name="date-input"><br><br>
      <button id="submit-button">
        submit
      </button>
    </div>  
  )
}