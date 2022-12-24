const pokeApi = {};

function convertPokeApiDeteilToPokemon(pokeDeteil) {
	const pokemon = new Pokemon()
	pokemon.number = pokeDeteil.id
	pokemon.name = pokeDeteil.name

	const types = pokeDeteil.types.map((typeSlot) => typeSlot.type.name)
	const {type} = types

	pokemon.types = types
	pokemon.type = type
	pokemon.photo = pokeDeteil.sprites.other.dream_world.front_default

	return pokemon
}

pokeApi.pokemonsDeteil = (pokemon) => {
	return fetch(pokemon.url)
	.then((reponse) => reponse.json())
	.then(convertPokeApiDeteilToPokemon)
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


