import type { ISubject } from "./ISubject.js";

export class Subject implements ISubject {
    private observers: any[] = [];
    private state: number;

    constructor() {
        this.state = 0;
    }

    subscribe(observer: any): void {
        this.observers.push(observer);
    }

    unsubscribe(observer: any): void {
        this.observers = this.observers.filter(obs => obs !== observer);
    }

    notify(data: any): void {
        this.observers.forEach(observer => observer.update(data));
    }

    getState(): number {
        return this.state;
    }

    setState(state: number) {
        this.state = state;
        this.notify(state);
    }
};
