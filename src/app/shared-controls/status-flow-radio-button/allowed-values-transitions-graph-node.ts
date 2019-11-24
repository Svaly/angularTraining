export class AllowedValuesTransitionsGraphNode {
    private neighborsSet: Array<AllowedValuesTransitionsGraphNode>;
    public value: string | number | boolean;

    public get neighbors(): Array<string | number | boolean> {
        return this.neighborsSet.map(c => c.value);
    }

    constructor(value: string | number | boolean) {
        this.neighborsSet = [];
        this.value = value;
    }

    public AddNeighbor(node: AllowedValuesTransitionsGraphNode): void {
        this.neighborsSet.push(node);
    }
}
