

export function gamesSortFunc({games, sort_key}){
    console.log(" in sort func");
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
    console.log(" in filter func");
    if (games){
        games.filter(
            function(game){
                if (filter_key === "none"){
                    return true;
                }
                else if (game.home_team.conference === filter_key) {
                    return true;
                }
                else {
                    return false;
                } 
            }
        );
    }
    return games;
}



