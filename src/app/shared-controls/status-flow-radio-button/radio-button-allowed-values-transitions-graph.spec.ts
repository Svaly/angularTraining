import { RadioButtonAllowedValuesTransitionsGraph } from './radio-button-allowed-values-transitions-graph';

describe('RadioButtonAllowedValuesTransitionsGraph', () => {
  it('should create an instance', () => {
    expect(new RadioButtonAllowedValuesTransitionsGraph()).toBeTruthy();
  });

  it('should create an instance with allowed transitions', () => {
    const instance = new RadioButtonAllowedValuesTransitionsGraph([{from: 'a', to: 'b'}, {from: 'a', to: 'c'}, ]);
    expect(instance.getAllowedTransitions('a')).toContain('a');
    expect(instance.getAllowedTransitions('a')).toContain('b');
    expect(instance.getAllowedTransitions('a')).toContain('c');
    expect(instance.getAllowedTransitions('b')).toEqual(['b']);
    expect(instance.getAllowedTransitions('c')).toEqual(['c']);
    expect(instance.getAllowedTransitions('d')).toEqual([]);
  });

  it('should add allowed transition', () => {
    const instance = new RadioButtonAllowedValuesTransitionsGraph();
    instance.addAllowedValueTransition('a', 'b');
    expect(instance.getAllowedTransitions('a')).toContain('a');
    expect(instance.getAllowedTransitions('a')).toContain('b');
    expect(instance.getAllowedTransitions('b')).toEqual(['b']);
  });

  it('should add transition only once', () => {
    const instance = new RadioButtonAllowedValuesTransitionsGraph();
    instance.addAllowedValueTransition('a', 'b');
    instance.addAllowedValueTransition('a', 'b');
    expect(instance.getAllowedTransitions('a').length).toBe(2);
    expect(instance.getAllowedTransitions('b').length).toBe(1);
  });
});
