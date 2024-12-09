

const team = {
  _players : [
    { firstName: "Cristiano", lastName: "Ronaldo", age: 39 },
    { firstName: "Neymar", lastName: "Junior", age: 32 },
    { firstName: "Kylian", lastName: "Mbappé", age: 25 }
  ],
  _games : [
    { opponent: "Real Madrid", teamPoints: 3, opponentPoints: 1 },
    { opponent: "Manchester City", teamPoints: 2, opponentPoints: 2 },
    { opponent: "Liverpool", "teamPoints": 1, opponentPoints: 3 }
  ],

  get players(){
    return this._players;
  },

  get games(){
    return this._games;
  },

  addPlayer(newFirstName, newLastName, newAge){
    const newPlayer = { firstName: newFirstName, lastName: newLastName, age: newAge };
    this._players.push(newPlayer);

  },

  addGame(newOpponent, newTeamPoints, newOpponentPoints){
    const newGame =  { opponent:newOpponent, teamPoints:newTeamPoints, opponentPoints:newOpponentPoints };
    this._games.push(newGame);
  }

};

team.addPlayer("Bugs", "Bunny", 76);
team.addGame('Titans', 100, 98);
console.log(team.games);









