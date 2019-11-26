import { AllowedValuesTransitionsGraphNode } from './allowed-values-transitions-graph-node';
import { doesNotThrow } from 'assert';

describe('AllowedValuesTransitionsGraphNode', () => {
  it('should create an instance', () => {
    expect(new AllowedValuesTransitionsGraphNode(null)).toBeTruthy();
  });

  it('should set value', () => {
    const value = true;
    const instance = new AllowedValuesTransitionsGraphNode(value);
    expect(instance.value).toEqual(value);
  });

  it('should add neighbor', () => {
    const instance = new AllowedValuesTransitionsGraphNode(true);
    const neighbor = new AllowedValuesTransitionsGraphNode(false);
    instance.addNeighbor(neighbor);

    expect(instance.neighbors[0]).toEqual(neighbor.value);
  });
});
