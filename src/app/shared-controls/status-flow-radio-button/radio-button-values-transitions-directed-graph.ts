import { AllowedValuesTransitionsGraphNode } from './allowed-values-transitions-graph-node';

export class RadioButtonAllowedValuesTransitions {
    private nodeSet: Array<AllowedValuesTransitionsGraphNode>;

    public get allValues(): Array<string | number | boolean> {
        return this.nodeSet.map(c => c.value);
    }

    constructor(transitions?: { from: string | number | boolean, to: string | number | boolean }[]) {
        this.nodeSet = [];

        if (transitions) {
            for (var transition of transitions) {
                this.addAllowedValueTransition(transition.from, transition.to);
            }
        }
    }

    public addAllowedValueTransition(from: string | number | boolean, to: string | number | boolean): void {
        var fromNode = this.getOrCreateNode(from);
        var toNode = this.getOrCreateNode(to);
        fromNode.AddNeighbor(toNode);
    }

    public getAllowedTransitions(value: string | number | boolean): Array<string | number | boolean> {
        var node = this.getNode(value);
        return node !== undefined ? node.neighbors.concat(node.value) : [];
    }

    private getOrCreateNode(value: string | number | boolean): AllowedValuesTransitionsGraphNode {
        var node = this.getNode(value);
        return node !== undefined ? node : this.createNode(value);
    }

    private getNode(value: string | number | boolean): AllowedValuesTransitionsGraphNode | undefined {
        return this.nodeSet.find(c => c.value == value);
    }

    private createNode(value: string | number | boolean): AllowedValuesTransitionsGraphNode {
        var node = new AllowedValuesTransitionsGraphNode(value);
        this.nodeSet.push(node);
        return node;
    }
}
