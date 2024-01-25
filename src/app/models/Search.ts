export class Search {
    states: string [];
    cities: string [];
    districts: string [];
    priceMin: number;
    priceMax: number;

    constructor(states:string[], cities:string[], districts:string[],priceMin:number, priceMax:number) {
        this.states = states;
        this.cities = cities;
        this.districts = districts;
        this.priceMin = priceMin;
        this.priceMax = priceMax;
    }
}