import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomPipeViewerComponent } from './custom-pipe-viewer.component';

describe('CustomPipeViewerComponent', () => {
  let component: CustomPipeViewerComponent;
  let fixture: ComponentFixture<CustomPipeViewerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CustomPipeViewerComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CustomPipeViewerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
