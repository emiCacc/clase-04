import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'notaConColor'
})
export class NotaConColorPipe implements PipeTransform {

  transform(nota: string): { nota: string, color: string } {
    const [valorNota, resultado] = nota.split(' - ');
    const aprobado = parseInt(valorNota) >= 6;
    const color = aprobado ? 'green' : 'red';
    return { nota, color };
  }

}