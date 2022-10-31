function convertPokemonToLi(pokemon) {
  return `
        <li class="pokemon ${pokemon.type}">
                <span class="number">#${pokemon.number}</span>
                <span class="name">${pokemon.name}</span>
                <div class="details">
                    <ol class="types">
                        ${pokemon.types.map(
                          (type) => `<li class="type ${type}">${type}</li>`
                        ).join('')}
                    </ol>

                    <img src="${pokemon.photo}"
                      alt="${pokemon.name}">
                </div>
        </li>
    `;
}

// eslint-disable-next-line no-unused-vars
const pokemonList = document.getElementById("pokemonList");

// eslint-disable-next-line no-undef
pokeApi.getPokemons().then((pokemons = []) => {
  const newHtml = pokemons.map(convertPokemonToLi).join(" ");
  pokemonList.innerHTML = newHtml;
});
