import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import { LightService } from '../light.service';
import { LightSetting } from '../../model/light-setting';
import { environment } from 'src/environments/environment.prod';

@Component({
  selector: 'app-control-panel',
  templateUrl: './control-panel.component.html',
  styleUrls: ['./control-panel.component.scss']
})
export class ControlPanelComponent implements OnInit {

  config: LightSetting[] = environment.lights;

  constructor() {
  }

  ngOnInit() {
  }

}
