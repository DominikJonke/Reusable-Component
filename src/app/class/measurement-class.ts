export class Measurement {
    name: string;
    value: number;
    unit: string;
    
    constructor(name, value, unit?) {
        this.name = name;
        this.value = value;
        this.unit = unit;
    }
}