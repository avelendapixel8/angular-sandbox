import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EarnObjectComponent } from './earn-object.component';

describe('EarnObjectComponent', () => {
  let component: EarnObjectComponent;
  let fixture: ComponentFixture<EarnObjectComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EarnObjectComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EarnObjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
