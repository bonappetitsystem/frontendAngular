import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'cnpj'
})
export class CnpjPipe implements PipeTransform {

  transform(cnpj:any): any {

    if(cnpj){
      let cnpfString = cnpj.replace(/\D/g, '');
      cnpj = cnpfString.replace(/(\d{2})?(\d{3})?(\d{3})?(\d{4})?(\d{2})/, '$1.$2.$3/$4-$5');
    }
    return cnpj;
  }

}
