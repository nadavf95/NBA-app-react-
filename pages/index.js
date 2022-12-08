
import { GetData } from "../utilities";
import InputDataSec from "../components/input_data_sec";
import { ShowGames } from "../components/games";
import { useState } from "react";
import { ChangeHandler } from "../utilities";

// Our main page. Here we are loading data "on the client"
// And showing some loading screen(s) while waiting for the data to be ready
export default function IndexPage() {
  var dd = String(today.getDate()).padStart(2, '0');
  var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
  var yyyy = today.getFullYear();

  const {games, setGames} = useState(none);
  const {sort_key, setSortKey} = useState("a-z");
  const {filter_key, setFilterKey} = useState("none");
  changeHanler(setGames, "date", yyyy + '-' + mm + '-' + dd);
  return (
    <>
      <div className="row">
        <InputDataSec changeHanler={ChangeHandler}/>
        <ShowGames games={games} sort_key={sort_key} filter_key={filter_key} />
      </div>
    </>
  )
}
