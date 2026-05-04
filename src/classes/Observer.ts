import type { IObserver } from "./IObserver.js";

export class Observer implements IObserver {
    private name: string;

    constructor(name: string) {
        this.name = name;
    }

    update(data: any): void {
        console.log(`${this.name} received data: ${data}`);
    }       
};
