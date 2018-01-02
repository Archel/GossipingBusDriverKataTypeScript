export default class Driver {
    private id: number;
    private route: number[];
    
    constructor(id: number, route: number[]) {
        this.id = id;
        this.route = route;
    }

    public getStopAt(minute: number): number {
        const index = getIndexAt(minute, this.route.length);
        
        return this.route[index];
        
        function getIndexAt(minute: number, routeLength): number {
            return minute > 0 ? ((minute - 1) % routeLength) : 0;
        }
    }
}
