import axios from "axios";
import {Move, PokemonResponse} from "./interfaces/pokeapi-response.interface.ts";

export class Pokemon {
    // public id: number;
    // public name: string;

    get imageUrl(): string {
        return `https://pokemon.com/${this.id}.jpg`
    }

    constructor(
        public readonly id: number,
        public name: string,
    ) {
        // this.id = id;
        // this.name = name;
    }

    //metodos
    scream() {
        console.log(this.name.toUpperCase())
    }
    speak() {
        console.log(`${this.name} ${this.name}`)
    }

    async getMoves(): Promise<Move[]> {
        const { data } = await axios.get<PokemonResponse>('https://pokeapi.co/api/v2/pokemon/4');
        return data.moves;
    }
}

export const charmander = new Pokemon(4, 'charmander');
charmander.scream();
charmander.speak();

charmander.getMoves();