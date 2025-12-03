import { Component, inject, OnInit } from '@angular/core';
import { OfDataService } from '../../../shared/services/of-data.service';
import { OFDocument } from '../../../types/of-data.type';

@Component({
  selector: 'mike-of-service-viewer',
  templateUrl: './of-service-viewer.component.html',
  styleUrl: './of-service-viewer.component.scss',
})
export class OfServiceViewerComponent implements OnInit {
  ofDataService = inject(OfDataService);
  ofData: OFDocument[] = [];

  ngOnInit(): void {
    this.ofDataService.getOfData().subscribe((res) => {
      this.ofData = res;
    });
  }
}
