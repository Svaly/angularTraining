export class AllowedValuesTransitionsGraphNode {

    private neighborsSet: Array<AllowedValuesTransitionsGraphNode>;
    public value: string | number | boolean;

    public get neighbors(): Array<string | number | boolean> {
        return this.neighborsSet.map(n => n.value);
    }

    constructor(value: string | number | boolean) {
        this.neighborsSet = [];
        this.value = value;
    }

    public addNeighbor(neighbor: AllowedValuesTransitionsGraphNode): void {
        if (this.alreadyHasNeighbor(neighbor)) {
            return;
        }

        this.neighborsSet.push(neighbor);
    }

    private alreadyHasNeighbor(newNeighbor: AllowedValuesTransitionsGraphNode): boolean {
        return this.neighborsSet.find(c => c.value === newNeighbor.value) !== undefined;
    }
}
