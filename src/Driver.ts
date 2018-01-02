export default class Driver {
    private id: number;
    private route: number[];
    
    constructor(id: number, route: number[]) {
        this.id = id;
        this.route = route;
    }

    public getCurrentStop(minute: number): number {
        return this.route[minute];
    }
}
