import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public title = 'Witaj nieznajomy';

  public getText(a: number, b: number ): string {
    return `suma to ${a + b}`;
  }
}