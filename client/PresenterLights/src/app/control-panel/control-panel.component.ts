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

  config: LightSetting[] = [
    {
      color: '#0041aa',
      duration: -1
    },
    {
      color: '#a90000',
      duration: -1
    },
    {
      color: '#ffa100',
      duration: 30
    },
    {
      color: '#666666',
      duration: -1
    }
  ];

  constructor() {
  }

  ngOnInit() {
  }

}
