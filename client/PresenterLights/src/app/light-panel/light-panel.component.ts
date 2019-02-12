import { Component, OnInit, OnDestroy } from '@angular/core';
import { LightService } from '../light.service';
import { Subscription } from 'rxjs';
import { LightSetting } from 'src/model/light-setting';
import { interval } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-light-panel',
  templateUrl: './light-panel.component.html',
  styleUrls: ['./light-panel.component.scss']
})
export class LightPanelComponent implements OnInit, OnDestroy {

  currentLightSetting: LightSetting;
  private lightSub: Subscription;
  private timerSub: Subscription;

  private timer = -1;
  private lightColor = '#8e8e8e';

  constructor(private lightService: LightService) { }

  ngOnInit() {
    this.currentLightSetting = {color: 'none', duration: -1};
    this.lightSub = this.lightService.currentLightSetting.subscribe(setting => this.setLight(setting));
  }

  ngOnDestroy() {
    this.lightSub.unsubscribe();
  }

  setLight(lightSetting: LightSetting) {

    // If timer has already been created then unsubscribe so that you dont end up with multiple fires
    if (typeof this.timerSub !== 'undefined') {
      this.timerSub.unsubscribe();
    }

    this.currentLightSetting = lightSetting;
    this.timer = lightSetting.duration;
    this.lightColor = lightSetting.color;

    if (lightSetting.duration !== -1) {
      this.timerSub = interval(1000).subscribe(() => this.updateTime());
    }
  }
  updateTime() {
    if (this.timer > 0) {
      --this.timer;
    } else {
      this.timerSub.unsubscribe();
    }
  }
}
