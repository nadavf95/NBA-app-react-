import FilterSec from "./filter_sec";
import SortSec from "./sort_sec";


export default function InputDataSec({ChangeHandler}) {
  return (
    <div className="content">
      <h2>Games scores by date: </h2>
      <input type="date" onChange={(e) => ChangeHandler("date",e.target.value)} />
      <SortSec ChangeHandler={ChangeHandler}/>
      <FilterSec ChangeHandler={ChangeHandler}/>
    </div>
  );
}