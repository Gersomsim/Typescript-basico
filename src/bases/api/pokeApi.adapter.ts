import axios from "axios";
import {PokemonResponse} from "../interfaces/pokeapi-response.interface.ts";

export class PokeApiAdapter {
    private readonly axios = axios;
    async get<T>(url: string){
        return await this.axios.get<T>(url);
    }
    async post(url: string, payload: any ){}
    async patch(url:string, payload: any) {}
    async delete( url: string) {}
}