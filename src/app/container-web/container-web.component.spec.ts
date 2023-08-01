import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContainerWebComponent } from './container-web.component';

describe('ContainerWebComponent', () => {
  let component: ContainerWebComponent;
  let fixture: ComponentFixture<ContainerWebComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ContainerWebComponent]
    });
    fixture = TestBed.createComponent(ContainerWebComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
