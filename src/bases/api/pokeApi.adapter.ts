import axios from "axios";

export interface HttpAdapter {
    get<T>(url: string) :  Promise<T>
}


export class PokeApiAdapter implements HttpAdapter{
    private readonly axios = axios;
    async get<T>(url: string){
        const { data } = await this.axios.get<T>(url);
        return data;
    }
    async post(url: string, payload: any ){}
    async patch(url:string, payload: any) {}
    async delete( url: string) {}
}