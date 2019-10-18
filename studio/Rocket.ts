import { Payload } from './Payload';
import { Cargo } from './Cargo';
import { Astronaut } from './astronaut';

export class Rocket implements Payload {
    name: string
    totalCapacityKg: number
    massKg: number
    cargoItems: Cargo[] = []
    astronauts: Astronaut[] = []
    constructor(name: string, totalCapacityKg: number) {
        this.name = name
        this.totalCapacityKg = totalCapacityKg
    }
    sumMass(items: Payload[]): number {
        let x: number = 0;
        for (let i = 0; i < items.length; i++) {
        x += items[i].massKg
        }
        return x
    }
    currentMassKg(): number {
        let x = this.sumMass(this.astronauts) + this.sumMass(this.cargoItems);
        return x;
    }
    canAdd(item: Payload): boolean {
        if (this.currentMassKg() + item.massKg <= this.totalCapacityKg) {
            return true
        }
    }
    addCargo(cargo: Cargo) {
        if (this.canAdd(cargo)) {
            this.cargoItems.push(cargo)
            return true;
        }
        else {
            return false;
        }
    }
    addAstronaut(astronaut: Astronaut) {
        if (this.canAdd(astronaut)) {
            this.astronauts.push(astronaut)
            return true;
        }
        else {
            return false;
        }
    }

}