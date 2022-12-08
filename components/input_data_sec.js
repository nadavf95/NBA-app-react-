import FilterSec from "./filter_sec";
import SortSec from "./sort_sec";
import { ChangeHandler } from "../utilities";


export default function InputDataSec({SetGames}, {SetSortKey}, {SetFilterKey}) {
  return (
    <div className="content">
      <span>Insert a date: </span>
      <input type="date" onChange={(e) => ChangeHandler(SetGames,"date",e)} />
      <SortSec sort_func={SetSortKey}/>
      <FilterSec filter_func={SetFilterKey}/>
    </div>
  );
}