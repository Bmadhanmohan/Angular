import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContainerBookComponent } from './container-book.component';

describe('ContainerBookComponent', () => {
  let component: ContainerBookComponent;
  let fixture: ComponentFixture<ContainerBookComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ContainerBookComponent]
    });
    fixture = TestBed.createComponent(ContainerBookComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
