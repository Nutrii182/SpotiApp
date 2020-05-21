import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';


@Pipe({
  name: 'domseguro'
})
export class DomseguroPipe implements PipeTransform {

  constructor(private domSanitizer: DomSanitizer){}

  transform( value: string, url: string): any {
    value = value.replace(/spotify:/g, '');
    value = value.replace(/:/g, '/');
    return this.domSanitizer.bypassSecurityTrustResourceUrl( url + value );
  }

}
