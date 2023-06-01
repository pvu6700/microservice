import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MeoWebUIComponent } from './meo-web-ui.component';

describe('MeoWebUIComponent', () => {
  let component: MeoWebUIComponent;
  let fixture: ComponentFixture<MeoWebUIComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MeoWebUIComponent]
    });
    fixture = TestBed.createComponent(MeoWebUIComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
