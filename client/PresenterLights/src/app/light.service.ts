import { Injectable } from '@angular/core';
import { Socket } from 'ngx-socket-io';
import { LightSetting } from '../model/light-setting';


@Injectable({
  providedIn: 'root'
})
export class LightService {
  currentLightSetting = this.socket.fromEvent<LightSetting>('changeLight');

  constructor(private socket: Socket) {}

  changeLight(lightSetting: LightSetting) {
    this.socket.emit('changeLight', lightSetting);
  }
}
