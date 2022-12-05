
import Message from "../components/message";
import { useApiData } from "../hooks/data";

// Our main page. Here we are loading data "on the client"
// And showing some loading screen(s) while waiting for the data to be ready
export default function IndexPage() {

  const { data, isLoading, isError } = useApiData();

  if (isLoading) return <Message content="Loading..." />
  if (isError) return <Message content="An error occured..." />
  if (!data) return <Message content="No data could be loaded..." />

  // Just for convenience
  console.log(data)
  const games = data.data;

  return (
    <>
      <div className="row">
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
