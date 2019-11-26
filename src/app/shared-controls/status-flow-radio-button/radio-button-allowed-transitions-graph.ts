import { AllowedValuesTransitionsGraphNode } from './allowed-values-transitions-graph-node';

export class RadioButtonAllowedTransitionsGraph {

    private nodeSet: Array<AllowedValuesTransitionsGraphNode>;

    constructor(transitions?: Array<{ from: string | number | boolean, to: string | number | boolean }>) {
        this.nodeSet = [];

        if (transitions) {
            for (let transition of transitions) {
                this.addAllowedValueTransition(transition.from, transition.to);
            }
        }
    }

    public addAllowedValueTransition(
        from: string | number | boolean,
        to: string | number | boolean): void {

        const fromNode = this.getOrCreate(from);
        const toNode = this.getOrCreate(to);

        fromNode.addNeighbor(toNode);
    }

    public getAllowedValueTransition(
        value: string | number | boolean)
        : Array<string | number | boolean> {
        const node = this.nodeSet.find(c => c.value === value);

        if (node === undefined) {
            return [];
        }

        return node.neighbors.concat(node.value);
        //   return node === undefined ? [] : node.neighbors;
    }

    public getOrCreate(value: string | number | boolean): AllowedValuesTransitionsGraphNode {
        const existingNode = this.nodeSet.find(c => c.value === value);

        if (existingNode === undefined) {
            const newNode = new AllowedValuesTransitionsGraphNode(value);
            this.nodeSet.push(newNode);
            return newNode;
        }

        return existingNode;
    }

}
