import { RadioButtonItem } from './radio-button-item';

describe('RadioButtonItem', () => {
  it('should create an instance', () => {
    expect(new RadioButtonItem('', '')).toBeTruthy();
  });

  it('should set properties without description', () => {
    const displayText = 'Approved';
    const value = 1;
    const instance = new RadioButtonItem(displayText, value);
    expect(instance.value).toEqual(value);
    expect(instance.displayText).toEqual(displayText);
  });

  it('should set properties and description', () => {
    const displayText = 'Approved';
    const description = 'Description text';
    const value = 1;
    const instance = new RadioButtonItem(displayText, value, description);
    expect(instance.value).toEqual(value);
    expect(instance.displayText).toEqual(displayText);
    expect(instance.description).toEqual(description);
  });
});
