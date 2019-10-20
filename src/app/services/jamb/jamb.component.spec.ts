import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JambComponent } from './jamb.component';

describe('JambComponent', () => {
  let component: JambComponent;
  let fixture: ComponentFixture<JambComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JambComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JambComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
