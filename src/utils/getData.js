const API_URL = `https://pokeapi.co/api/v2/pokemon/`;
export const getPokemon = id => {
  return fetch(`${API_URL}${id ? id : ""}`)
    .then(res => res.json())
    .then(pokemon => {
      const data = pokemon["results"];
      return data;
    });
};
