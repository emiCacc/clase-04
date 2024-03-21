import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'notaConColor'
})
export class NotaConColorPipe implements PipeTransform {

  transform(nota: string): { nota: string, clase: string } {
    let clase: string;

    if (nota === 'No cursa') {
      clase = 'no-cursa';
    } else {
      const [valorNota, resultado] = nota.split(' - ');
      const aprobado = parseInt(valorNota) >= 6;
      clase = aprobado ? 'aprobo' : 'desaprobo';
    }

    return { nota, clase };
  }
}
