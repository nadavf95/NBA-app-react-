
import { GetData } from "../utilities";
import InputDataSec from "../components/input_data_sec";
import { ShowGames } from "../components/games";
import { useState } from "react";
import { ChangeHandler } from "../utilities";

// Our main page. Here we are loading data "on the client"
// And showing some loading screen(s) while waiting for the data to be ready
export default function IndexPage() {
  
  const date = new Date();
  let day = date.getDate();
  let month = date.getMonth() + 1;
  let year = date.getFullYear();
  let currentDate = `${year}-${month}-${day}`;
  console.log(currentDate);


  const [games, setGames] = useState({});
  const [sort_key, setSortKey] = useState("a-z");
  const [filter_key, setFilterKey] = useState("none");
  setGames(ChangeHandler(setGames, "date", currentDate));
  return (
    <>
      <div className="row">
        <InputDataSec changeHanler={ChangeHandler}/>
        <ShowGames games={games} sort_key={sort_key} filter_key={filter_key} />
      </div>
    </>
  )
}
