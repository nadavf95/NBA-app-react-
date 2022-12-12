import InputDataSec from "../components/input_data_sec";
import { ShowGames } from "../components/games";
import { useState } from "react";
import { useApiData } from "../hooks/data";

// Our main page. Here we are loading data "on the client"
// And showing some loading screen(s) while waiting for the data to be ready
export default function IndexPage() {
  
  const c_date = new Date();
  let day = c_date.getDate();
  let month = c_date.getMonth() + 1;
  let year = c_date.getFullYear();
  let currentDate = `${year}-${month}-${day}`;


  const [date, setDate] = useState(currentDate);
  const [sort_key, setSortKey] = useState("a-z");
  const [filter_key, setFilterKey] = useState("none");

  function ChangeHandler(key, value){
    console.log("in handler key:  " + key + "  value:  " + value);
    if (key ==="date"){
      setDate(value);
    }
    else if(key ==="sort"){
      setSortKey(value);
    }
    else{
      setFilterKey(value);
    }
  }


  return (
    <>
      <div className="row">
        <InputDataSec ChangeHandler={ChangeHandler}/>
        <ShowGames date={date} sort_key={sort_key} filter_key={filter_key} />
      </div>
    </>
  )
}
