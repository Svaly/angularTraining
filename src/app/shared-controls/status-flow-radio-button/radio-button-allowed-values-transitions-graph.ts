import { AllowedValuesTransitionsGraphNode } from './allowed-values-transitions-graph-node';

export class RadioButtonAllowedValuesTransitionsGraph {

    private nodeSet: Array<AllowedValuesTransitionsGraphNode>;

    constructor(transitions?: Array<{ from: string | number | boolean, to: string | number | boolean }>) {
        this.nodeSet = [];

        if (transitions) {
            for (let transition of transitions) {
                this.addAllowedValueTransition(transition.from, transition.to);
            }
        }
    }

    public addAllowedValueTransition(from: string | number | boolean, to: string | number | boolean): void {
        const fromNode = this.getOrCreateNode(from);
        const toNode = this.getOrCreateNode(to);
        fromNode.addNeighbor(toNode);
    }

    public getAllowedTransitions(value: string | number | boolean): Array<string | number | boolean> {
        let node = this.getNode(value);
        return node !== undefined ? node.neighbors.concat(node.value) : [];
    }

    private getOrCreateNode(value: string | number | boolean) {
        let node = this.getNode(value);
        return node !== undefined ? node : this.createNode(value);
    }

    private getNode(value: string | number | boolean): AllowedValuesTransitionsGraphNode | undefined {
        return this.nodeSet.find(c => c.value === value);
    }

    private createNode(value: string | number | boolean): AllowedValuesTransitionsGraphNode {
        let node = new AllowedValuesTransitionsGraphNode(value);
        this.nodeSet.push(node);
        return node;
    }
}
