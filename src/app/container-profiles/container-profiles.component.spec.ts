import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContainerProfilesComponent } from './container-profiles.component';

describe('ContainerProfilesComponent', () => {
  let component: ContainerProfilesComponent;
  let fixture: ComponentFixture<ContainerProfilesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ContainerProfilesComponent]
    });
    fixture = TestBed.createComponent(ContainerProfilesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
