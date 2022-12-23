const pokeApi = {};

pokeApi.pokemonsDeteil = (pokemon) => {
	return fetch(pokemon.url)
	.then((reponse) => reponse.json())
}

pokeApi.getPokemons = (offset = 0, limit = 10) => {
  const url = `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`
  return fetch(url)
	.then((response) => response.json())
	.then((jsonBody) => jsonBody.results)
	.then((pokemons) => pokemons.map(pokeApi.pokemonsDeteil))
	.then((deteilRequests) => Promise.all(deteilRequests))
	.then((pokemonsDeteil) => pokemonsDeteil)
}

Promise.all([
	fetch('https://pokeapi.co/api/v2/pokemon/1'),
	fetch('https://pokeapi.co/api/v2/pokemon/2'),
	fetch('https://pokeapi.co/api/v2/pokemon/3'),
	fetch('https://pokeapi.co/api/v2/pokemon/4')
]).then((results) => {
	console.log(results)
})
