export const pokemonIds = [1,29,13,21,45];

interface Pokemon {
    id: number;
    name: string;
    age?: number;
}
export const bulbasaur: Pokemon = {
    id: 1,
    name: 'Bulbasaur'
}

export const pokemons: Pokemon[] = [];

export const charmander: Pokemon = {
    id: 4,
    name: 'charmander'
}
pokemons.push(charmander, bulbasaur)