import { Component } from '@angular/core';
import { KeyboardShortcutsService } from 'ng-keyboard-shortcuts';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [ KeyboardShortcutsService ]
})
export class AppComponent {
  title = 'PresenterLights';
  controlPanelHidden = true;

  constructor(private keyboard: KeyboardShortcutsService) {

    this.keyboard.add({
      key: ['cmd + shift + a', 'ctrl + shift + a'],
      command: () => this.showControl()
    });


  }

  showControl() {
    this.controlPanelHidden = !this.controlPanelHidden;
  }
}
