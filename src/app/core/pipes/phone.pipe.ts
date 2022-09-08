import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'phone'
})
export class PhonePipe implements PipeTransform {

  transform(phone: any):any{
    if (phone) {
      let phoneString = phone.toString().replace(/\D/g, '');

      let foneFormat = '';
      if(phoneString.length > 12){
        foneFormat = phoneString.replace(/(\d{2})?(\d{2})?(\d{5})?(\d{4})/,
        '+$1 ($2) $3-$4');
      }
      else if(phoneString.length > 11){
        foneFormat = phoneString.replace(/(\d{2})?(\d{2})?(\d{4})?(\d{4})/,
        '+$1 ($2) $3-$4');
      }

      else if(phoneString.length > 10){
        foneFormat = phoneString.replace(/(\d{2})?(\d{5})?(\d{4})/,
        '($1) $2-$3');
      }
      else if(phoneString.length > 9){
        foneFormat = phoneString.replace(/(\d{2})?(\d{4})?(\d{4})/,
        '($1) $2-$3');
      }
      else if(phoneString.length > 5){
        foneFormat = phoneString.replace(/^(\d{2})?(\d{4})?(\d{0,4})/, '($1) $2-$3');
      }
      else if (phoneString.length > 1) {
        foneFormat = phoneString.replace(/^(\d{2})?(\d{0,5})/, '($1) $2');

      } else if (phone !== '') { foneFormat = phoneString.replace(/^(\d*)/, '($1'); }
      return foneFormat;
      }
    }

  }

