import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

@Pipe({
  name: 'boldHighlight'
})
export class BoldHighlightPipe implements PipeTransform {
  constructor(private sanitizer: DomSanitizer) {}

  transform(value: string, keyword: string): SafeHtml {
    if (!value || !keyword) return value;

    const escaped = keyword.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
    const pattern = new RegExp(escaped, 'gi');

    const replaced = value.replace(
      pattern,
      (m: string) => `<strong>${m}</strong>`
    );

    return this.sanitizer.bypassSecurityTrustHtml(replaced);
  }
}
