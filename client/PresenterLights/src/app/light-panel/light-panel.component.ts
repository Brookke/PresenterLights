import { Component, OnInit, OnDestroy } from '@angular/core';
import { LightService } from '../light.service';
import { Subscription } from 'rxjs';
import { LightSetting } from 'src/model/light-setting';

@Component({
  selector: 'app-light-panel',
  templateUrl: './light-panel.component.html',
  styleUrls: ['./light-panel.component.scss']
})
export class LightPanelComponent implements OnInit, OnDestroy {

  currentLightSetting: LightSetting;
  private lightSub: Subscription;

  constructor(private lightService: LightService) { }

  ngOnInit() {
    this.currentLightSetting = {color: 'none', duration: -1};
    this.lightSub = this.lightService.currentLightSetting.subscribe(setting => this.setLight(setting));
  }

  ngOnDestroy() {
    this.lightSub.unsubscribe();
  }

  setLight(lightSetting: LightSetting) {
    this.currentLightSetting = lightSetting;
  }

}
