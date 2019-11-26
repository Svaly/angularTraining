import { AllowedValuesTransitionsGraphNode } from './allowed-values-transitions-graph-node';

describe('AllowedValuesTransitionsGraphNode', () => {
  it('should create an instance', () => {
    expect(new AllowedValuesTransitionsGraphNode(null)).toBeTruthy();
  });

  it('it should set value', () => {
    const value = 'Test';
    const instance = new AllowedValuesTransitionsGraphNode(value);
    expect(instance.value).toEqual(value);
  });

  it('it should add neighbor', () => {
    const instance = new AllowedValuesTransitionsGraphNode(null);
    const neighbor = new AllowedValuesTransitionsGraphNode('neighbor');
    instance.addNeighbor(neighbor);
    expect(instance.neighbors).toEqual([neighbor.value]);
  });

  it('it should add neighbor only one time', () => {
    const instance = new AllowedValuesTransitionsGraphNode(null);
    const neighbor = new AllowedValuesTransitionsGraphNode('neighbor');
    instance.addNeighbor(neighbor);
    instance.addNeighbor(neighbor);
    expect(instance.neighbors).toEqual([neighbor.value]);
  });
});
