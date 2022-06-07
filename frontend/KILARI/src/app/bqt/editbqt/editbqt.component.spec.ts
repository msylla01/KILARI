import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditbqtComponent } from './editbqt.component';

describe('EditbqtComponent', () => {
  let component: EditbqtComponent;
  let fixture: ComponentFixture<EditbqtComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditbqtComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditbqtComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
