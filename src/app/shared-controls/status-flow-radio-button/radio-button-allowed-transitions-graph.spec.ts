import { RadioButtonAllowedTransitionsGraph } from './radio-button-allowed-transitions-graph';

describe('RadioButtonAllowedTransitionsGraph', () => {
  it('should create an instance', () => {
    expect(new RadioButtonAllowedTransitionsGraph()).toBeTruthy();
  });


  it('should add allowed transition only once', () => {
    const instance = new RadioButtonAllowedTransitionsGraph();
    instance.addAllowedValueTransition('a', 'b');
    instance.addAllowedValueTransition('a', 'b');

    expect(instance.getAllowedValueTransition('a')).toContain('b');
    expect(instance.getAllowedValueTransition('a')).toContain('a');
    expect(instance.getAllowedValueTransition('a').length).toEqual(2);
  });

});
