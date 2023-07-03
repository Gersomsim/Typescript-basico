export class Pokemon {
    // public id: number;
    // public name: string;

    constructor(
        public readonly id: number,
        public readonly name: string) {
        // this.id = id;
        // this.name = name;
    }
}

export const charmander = new Pokemon(4, 'charmander');

