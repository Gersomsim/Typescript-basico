const MyDecorator = () => {
    return (target: Function) => {

    }
}

@MyDecorator()
export class Pokemon{
    constructor(
        public readonly id: number,
        public name: string
    ) {}
    speak() {
        console.log(this.name);
    }
}
