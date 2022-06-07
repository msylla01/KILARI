import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatebqtComponent } from './createbqt.component';

describe('CreatebqtComponent', () => {
  let component: CreatebqtComponent;
  let fixture: ComponentFixture<CreatebqtComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreatebqtComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreatebqtComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
