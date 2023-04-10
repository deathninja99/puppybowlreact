let APIURL = `https://fsa-puppy-bowl.herokuapp.com/api/2301-ftb-et-web-am/`;

const fetchAllPlayers = async () => {
  let request = await fetch(`${APIURL}players`);
  let players = await request.json();
  return players.data.players;
};

export function Puppies() {
  fetchAllPlayers();
}
