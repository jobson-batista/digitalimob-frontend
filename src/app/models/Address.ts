class Address {
    street: string;
    number: string;
    district: string;
    city: string;
    state: string;
    sigla: string;

    constructor(street: string, number: string, district: string, city: string, state: string, sigla: string) {
        this.street = street;
        this.number = number;
        this.district = district;
        this.city = city;
        this.state = state;
        this.sigla = sigla;
    }
}