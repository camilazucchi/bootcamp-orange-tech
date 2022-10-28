const offset = 0;
const limit = 10;
const url = `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`;

function convertPokemonToLi(pokemon) {
  return `
        <li class="pokemon">
                <span class="number">#001</span>
                <span class="name">${pokemon.name}</span>
                <div class="details">
                    <ol class="types">
                        <li class="type">grass</li>
                        <li class="type">poison</li>
                    </ol>
                    <img src="https://assets.pokemon.com/assets/cms2/img/pokedex/full/001.png" alt="${pokemon.name}">
                </div>
        </li>
    `;
}

const pokemonList = document.getElementById("pokemonList");

// eslint-disable-next-line no-undef
pokeApi.getPokemons().then((pokemons) => {
  const listItems = []

  pokemons.map()

  for (let i = 0; i < pokemons.length; i++) {
    const pokemon = pokemons[i];
    listItems.push(convertPokemonToLi(pokemon))
  }

  console.log(listItems);
})