import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'cpf'
})
export class CpfPipe implements PipeTransform {

  transform(cpf:any): any {
    
    if (cpf) {
      let cpfString = cpf.replace(/\D/g, '');   
      cpf = cpfString.replace(/(\d{3})?(\d{3})?(\d{3})?(\d{2})/, '$1.$2.$3-$4');

    }
    return cpf;
  }

}
