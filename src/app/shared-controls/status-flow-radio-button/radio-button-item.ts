export class RadioButtonItem {
    public displayText: string;
    public value: string | number | boolean;
    public description: string;
    constructor(text: string, value: string | number | boolean, description?: string) {
        this.displayText = text;
        this.value = value;
        this.description = description;
    }
}
