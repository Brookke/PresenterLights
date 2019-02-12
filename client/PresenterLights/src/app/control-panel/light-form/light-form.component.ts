import { Component, OnInit, Input } from '@angular/core';
import { LightSetting } from 'src/model/light-setting';
import { NgForm } from '@angular/forms';
import { LightService } from 'src/app/light.service';

@Component({
  selector: 'app-light-form',
  templateUrl: './light-form.component.html',
  styleUrls: ['./light-form.component.scss']
})
export class LightFormComponent implements OnInit {

  @Input() lightSetting: LightSetting;


  constructor(private lightService: LightService) { }

  ngOnInit() {
  }

  onSubmit(f: NgForm) {
    const lightSetting = new LightSetting();
    lightSetting.color = f.value.color;
    // Convert to a number
    lightSetting.duration = parseInt(f.value.duration, 10);
    this.lightService.changeLight(lightSetting);
  }

}
