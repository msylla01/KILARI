import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewbqtComponent } from './viewbqt.component';

describe('ViewbqtComponent', () => {
  let component: ViewbqtComponent;
  let fixture: ComponentFixture<ViewbqtComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewbqtComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewbqtComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
