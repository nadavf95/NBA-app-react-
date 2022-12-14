

export function gamesSortFunc({games, sort_key}){
    console.log(" in sort func, sort_key: " + sort_key);
    if(games){
        games.sort((a,b) => {
            if (sort_key === "a-z"){
                return a.home_team.name.localeCompare(b.home_team.name);
            }
            else{
                return b.visitor_team_score + b.home_team_score - a.visitor_team_score - a.home_team_score;
            }  
        });
    }
    return games;
}

export function gamesFilterFunc({games, filter_key}){
    // people.filter(person => person.age < 60).map(filteredPerson => (
    console.log(" in filter func, filter_key: " + filter_key);
    let filterd_games = []
    if (games){
        games.filter(game => {
                if (filter_key === "none"){
                    return true;
                }
                return (game.home_team.conference === filter_key);
            }
        ).map(filtered_game => (filterd_games.push(filtered_game)));
    }
    return filterd_games;
}



