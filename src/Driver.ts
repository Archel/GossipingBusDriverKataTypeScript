export default class Driver {
    private id: number;
    private route: number[];
    private gossips: number[];
    
    constructor(id: number, route: number[]) {
        this.id = id;
        this.route = route;
        this.gossips = [id];
    }

    public getStopAt(minute: number): number {
        const index = getIndexAt(minute, this.route.length);
        
        return this.route[index];
        
        function getIndexAt(minute: number, routeLength): number {
            return minute > 0 ? ((minute - 1) % routeLength) : 0;
        }
    }

    public numberOfGossips(): number {
        return this.gossips.length;
    }

    public addGossip(gossip: number): void {
        const driverHasGossip = this.gossips.indexOf(gossip) !== -1;

        if (!driverHasGossip) {
            this.gossips.push(gossip);
        }
        
    }

    public getId(): number {
        return this.id;
    }
}
