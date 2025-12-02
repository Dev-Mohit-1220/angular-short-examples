import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PipeViewerComponent } from './pipe-viewer.component';

describe('PipeViewerComponent', () => {
  let component: PipeViewerComponent;
  let fixture: ComponentFixture<PipeViewerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PipeViewerComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PipeViewerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
