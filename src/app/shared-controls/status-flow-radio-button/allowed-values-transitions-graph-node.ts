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

    public addNeighbor(node: AllowedValuesTransitionsGraphNode): void {
        this.neighborsSet.push(node);
    }
}
