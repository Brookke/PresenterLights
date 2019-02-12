import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LightFormComponent } from './light-form.component';

describe('LightFormComponent', () => {
  let component: LightFormComponent;
  let fixture: ComponentFixture<LightFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LightFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LightFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
