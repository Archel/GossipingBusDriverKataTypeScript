export default class Driver {
    private id: number;
    private route: number[];
    
    constructor(id: number, route: number[]) {
        this.id = id;
        this.route = route;
    }
}
