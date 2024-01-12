import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddMeoComponent } from './add-meo.component';

describe('AddMeoComponent', () => {
  let component: AddMeoComponent;
  let fixture: ComponentFixture<AddMeoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddMeoComponent]
    });
    fixture = TestBed.createComponent(AddMeoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
