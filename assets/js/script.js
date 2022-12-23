function converteTypesPokemons(pokemonTypes) {
	return pokemonTypes.map((typeSlot) => `<li class="type">${typeSlot.type.name}</li>`)
}

function convertPokemonHtml(pokemon) {
  return `
		<li class="pokemon">
			<span class="number">${pokemon.order}</span>
			<span class="name">${pokemon.name}</span>

			<div class="detail">
				<ol class="types">
					${converteTypesPokemons(pokemon.types).join('')}
				</ol>
				<img src="${pokemon.sprites.other.dream_world.front_default}"
					alt="${pokemon.name} png">
			</div>
		</li>
	`;
}
const pokemonList = document.getElementById('pokemonList')

pokeApi.getPokemons().then((pokemons = []) => {
	pokemonList.innerHTML += pokemons.map(convertPokemonHtml).join('')
});