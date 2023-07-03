import {Move, PokemonResponse} from "./interfaces/pokeapi-response.interface.ts";
import axios from "axios";


const Deprecated = (deprecationReason: string) => {
    return (target: any, memberName: string, propertyDescriptor: PropertyDescriptor) => {
        // console.log({target})
        return {
            get() {
                const wrapperFn = (...args: any[]) => {
                    console.warn(`Method ${ memberName } is deprecated with reason: ${ deprecationReason }`);
                    //! Llamar la función propiamente con sus argumentos
                    propertyDescriptor.value.apply(this, args);
                }
                return wrapperFn;
            }
        }
    }
}


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
    @Deprecated('Most use speak2 method instead')
    speak() {
        console.log(`${this.name} ${this.name}`)
    }

    async getMoves(): Promise<Move[]> {
        const { data } = await axios.get<PokemonResponse>('https://pokeapi.co/api/v2/pokemon/4');
        return data.moves;
    }
}

export const charmander = new Pokemon(4, 'charmander');