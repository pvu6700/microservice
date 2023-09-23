import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListMeoComponent } from './list-meo.component';

describe('ListMeoComponent', () => {
  let component: ListMeoComponent;
  let fixture: ComponentFixture<ListMeoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListMeoComponent]
    });
    fixture = TestBed.createComponent(ListMeoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
