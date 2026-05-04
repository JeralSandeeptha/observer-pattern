export interface ISubject {
    subscribe(observer: any): void;
    unsubscribe(observer: any): void;
    notify(data: any): void;
    getState(): number;
    setState(state: number): void;
};
