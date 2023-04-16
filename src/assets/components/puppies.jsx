const APIURL = `https://fsa-puppy-bowl.herokuapp.com/api/2301-ftb-et-web-am/`;
// gather the players
export const fetchAllPlayers = async () => {
  let request = await fetch(`${APIURL}players`);
  let players = await request.json();
  let Plist = players.data.players;
  return Plist;
};
