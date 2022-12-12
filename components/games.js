 import { useApiData } from "../hooks/data"

export function ShowGames({date, sort_key, filter_key}) {

    console.log("test");
    const {data, isLoading, isError} = useApiData(date);
    if (data){
        const games = data.data
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
            // <div className="game_item">
            //     <div className="content">
            //     <h2>lakers VS wizards</h2>
            //     <h3>100 : 80</h3>
            //     <p>final</p>
            //     </div>
            // </div>
        )
    }
}