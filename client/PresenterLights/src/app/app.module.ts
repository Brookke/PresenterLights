import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { SocketIoModule, SocketIoConfig } from 'ngx-socket-io';
import { ControlPanelComponent } from './control-panel/control-panel.component';
import { FormsModule } from '@angular/forms';
import { LightPanelComponent } from './light-panel/light-panel.component';
import { LightFormComponent } from './control-panel/light-form/light-form.component';
import { KeyboardShortcutsModule } from 'ng-keyboard-shortcuts';

const config: SocketIoConfig = { url: 'http://localhost:8080', options: {} };

@NgModule({
  declarations: [
    AppComponent,
    ControlPanelComponent,
    LightPanelComponent,
    LightFormComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    SocketIoModule.forRoot(config),
    KeyboardShortcutsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
