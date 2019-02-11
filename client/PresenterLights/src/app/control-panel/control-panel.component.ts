import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import { LightService } from '../light.service';
import { LightSetting } from '../../model/light-setting';

@Component({
  selector: 'app-control-panel',
  templateUrl: './control-panel.component.html',
  styleUrls: ['./control-panel.component.scss']
})
export class ControlPanelComponent implements OnInit {

  constructor(private lightService: LightService) {
  }

  ngOnInit() {
  }

  onSubmit(f: NgForm) {
    const lightSetting = new LightSetting();
    lightSetting.color = f.value.color;
    this.lightService.changeLight(lightSetting);
  }


}
