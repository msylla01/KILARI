import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IndexbqtComponent } from './indexbqt.component';

describe('IndexbqtComponent', () => {
  let component: IndexbqtComponent;
  let fixture: ComponentFixture<IndexbqtComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IndexbqtComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IndexbqtComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
