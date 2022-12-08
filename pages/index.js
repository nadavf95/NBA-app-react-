
import GetData from "../utilities";
import InputDataSec from "../components/input_data_sec";

// Our main page. Here we are loading data "on the client"
// And showing some loading screen(s) while waiting for the data to be ready
export default function IndexPage() {
  const games = GetData("2022/12/04", "none", "none");

  return (
    <>
      <div className="row">
        <InputDataSec />
        {games.map(game => {
          return(
             <div key={game.id} className="game_item">
                <div className="content">
                  <h2>{game.home_team.name} VS {game.visitor_team.name}</h2>
                  <h3>{game.home_team_score} : {game.visitor_team_score}</h3>
                  <p>{game.status}</p>
                </div>
             </div>
          )
        })}
      </div>
    </>
  )
}
