export class RadioButtonItem {
    public value: string | number | boolean;
    public displayText: string;
    constructor(value: string | number | boolean, displayText: string) {
        this.displayText = displayText;
        this.value = value;
    }
}
