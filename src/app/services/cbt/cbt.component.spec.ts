import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CbtComponent } from './cbt.component';

describe('CbtComponent', () => {
  let component: CbtComponent;
  let fixture: ComponentFixture<CbtComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CbtComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CbtComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
