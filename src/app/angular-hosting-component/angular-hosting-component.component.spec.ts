import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AngularHostingComponentComponent } from './angular-hosting-component.component';

describe('AngularHostingComponentComponent', () => {
  let component: AngularHostingComponentComponent;
  let fixture: ComponentFixture<AngularHostingComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AngularHostingComponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AngularHostingComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
