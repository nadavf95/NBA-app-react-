 import { useApiData } from "../hooks/data"
 import { gamesFilterFunc } from "../utilities";
 import { gamesSortFunc } from "../utilities";

export function ShowGames({date, sort_key, filter_key}) {
    console.log("in show games, date = " + date + "sort_key= " + sort_key + "filter_key= " + filter_key);

    const {data, isLoading, isError} = useApiData(date);
    if (data){
        let games = data.data;
        games = gamesFilterFunc({games, filter_key});
        games = gamesSortFunc({games, sort_key});
        if(games){
            return(
                <div className="game_item">
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
            )
        }
    }
}