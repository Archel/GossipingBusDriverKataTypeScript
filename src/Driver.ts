export default class Driver {
    private id: number;
    private route: number[];
    
    constructor(id: number, route: number[]) {
        this.id = id;
        this.route = route;
    }

    public getStopAt(minute: number): number {
        return this.route[minute];
    }
}
