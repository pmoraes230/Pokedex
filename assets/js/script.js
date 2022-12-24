
function convertPokemonHtml(pokemon) {
  return `
		<li class="pokemon ${pokemon.types}">
			<span class="number">${pokemon.number}</span>
			<span class="name">${pokemon.name}</span>

			<div class="detail">
				<ol class="types">
					${pokemon.types.map((type) => `<li class="type ${pokemon.type}">${type}</li>`).join('')}
				</ol>
				<img src="${pokemon.photo}"
					alt="${pokemon.name} png">
			</div>
		</li>
	`;
}
const pokemonList = document.getElementById('pokemonList')

pokeApi.getPokemons().then((pokemons = []) => {
	pokemonList.innerHTML += pokemons.map(convertPokemonHtml).join('')
});