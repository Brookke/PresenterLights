import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'PresenterLights';
  controlPanelHidden = true;

  showControl() {
    this.controlPanelHidden = !this.controlPanelHidden;
  }
}
