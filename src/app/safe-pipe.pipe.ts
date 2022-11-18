import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Pipe({
  name: 'safePipe'
})
export class SafePipePipe implements PipeTransform {
  constructor(protected sanitizer:DomSanitizer){
    
  }
  transform(value: string, ...args: any[]): unknown {
    return this.sanitizer.bypassSecurityTrustHtml(value);
  }

}
