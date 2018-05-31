
export class President {
    name: string;
    birthDay: string;
    birthPlace: string;
    deathDay: string;
    deathPlace: string;

    constructor(name: string, birthDay: string, birthPlace: string, deathDay: string, deathPlace: string) {
        this.name = name;
        this.birthDay = birthDay;
        this.birthPlace = birthPlace;
        this.deathDay = deathDay;
        this.deathPlace = deathPlace;
    }
}