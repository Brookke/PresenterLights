import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LightPanelComponent } from './light-panel.component';

describe('LightPannelComponent', () => {
  let component: LightPanelComponent;
  let fixture: ComponentFixture<LightPanelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LightPanelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LightPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
