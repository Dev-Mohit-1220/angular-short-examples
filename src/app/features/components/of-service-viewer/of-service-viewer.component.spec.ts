import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OfServiceViewerComponent } from './of-service-viewer.component';

describe('OfServiceViewerComponent', () => {
  let component: OfServiceViewerComponent;
  let fixture: ComponentFixture<OfServiceViewerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [OfServiceViewerComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OfServiceViewerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
