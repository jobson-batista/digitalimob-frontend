import { Address } from './Address';
import { EnterprisesType } from '../enums/EnterprisesType';

export class Enterprise {
    constructionCompany: string;
    type: EnterprisesType;
    roomMin: number;
    roomMax: number;
    address: Address;
    sizeMin: number;
    sizeMax: number;
    garageMin: number;
    garageMax: number;
    priceMin: number;
    priceM2: number;

    constructor (
        constructionCompany: string,
        type: EnterprisesType,
        roomMin: number,
        roomMax: number,
        address: Address,
        sizeMin: number,
        sizeMax: number,
        garageMin: number,
        garageMax: number,
        priceMin: number,
        priceM2: number
    ) {
        this.constructionCompany = constructionCompany;
        this.type = type;
        this.roomMin = roomMin;
        this.roomMax = roomMax;
        this.address = address;
        this.sizeMin = sizeMin;
        this.sizeMax = sizeMax;
        this.garageMin = garageMin;
        this.garageMax = garageMax;
        this.priceMin = priceMin;
        this.priceM2 = priceM2;
    }
}
