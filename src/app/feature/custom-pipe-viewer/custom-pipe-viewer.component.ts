import { Component } from '@angular/core';

@Component({
  selector: 'mike-custom-pipe-viewer',
  templateUrl: './custom-pipe-viewer.component.html',
  styleUrl: './custom-pipe-viewer.component.scss',
  standalone: false,
})
export class CustomPipeViewerComponent {
  text = "!24"
}
