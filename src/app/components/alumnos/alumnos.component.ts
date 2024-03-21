import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-alumnos',
  templateUrl: './alumnos.component.html',
  styleUrls: ['./alumnos.component.scss']
})
export class AlumnosComponent {

  @Input() pociones: boolean = false;
  @Input() defensa: boolean = false;
  @Input() encantamientos: boolean = false;
  @Input() historia: boolean = false;
  @Input() quidditch: boolean = false;
  @Input() criaturas: boolean = false;
  @Input() aritmancia: boolean = false;
  @Input() adivinacion: boolean = false;

  alumnosGriffindor = [
    'Harry Potter',
    'Hermione Granger',
    'Ron Weasley',
    'Neville Longbottom',
    'Ginny Weasley',
    'Fred Weasley',
    'George Weasley',
    'Percy Weasley',
    'Dean Thomas',
    'Seamus Finnigan'];

    notasPocionesGriffindor = [
      '6 - Aprobo',
      '10 - Aprobo',
      '6 - Aprobo',
      '7 - Aprobo',
      '8 - Aprobo',
      '6 - Aprobo',
      '6 - Aprobo',
      '7 - Aprobo',
      '7 - Aprobo',
      '6 - Aprobo'
    ];
    notasDefensaGriffindor = [
      '10 - Aprobo',
      '8 - Aprobo',
      '6 - Aprobo',
      '6 - Aprobo',
      '6 - Aprobo',
      '6 - Aprobo',
      '6 - Aprobo',
      '6 - Aprobo',
      '6 - Aprobo',
      '6 - Aprobo'
    ];
    notasEncantamientosGriffindor = [
      '7 - Aprobo',
      '10 - Aprobo',
      '6 - Aprobo',
      '6 - Aprobo',
      '9 - Aprobo',
      '6 - Aprobo',
      '8 - Aprobo',
      '7 - Aprobo',
      '6 - Aprobo',
      '8 - Aprobo'
    ];
    notasHistoriaGriffindor = [
      '6 - Aprobo',
      '10 - Aprobo',
      '6 - Aprobo',
      '6 - Aprobo',
      '10 - Aprobo',
      '6 - Aprobo',
      '6 - Aprobo',
      '6 - Aprobo',
      '10 - Aprobo',
      '6 - Aprobo'
    ];
    notasQuidditchGriffindor = [
      '10 - Aprobo',
      '10 - Aprobo',
      '8 - Aprobo',
      'No cursa',
      '10 - Aprobo',
      '8 - Aprobo',
      '8 - Aprobo',
      'No cursa',
      'No cursa',
      '9 - Aprobo'
    ];
    notasCriaturasGriffindor = [
      'No cursa',
      '10 - Aprobo',
      '6 - Aprobo',
      '6 - Aprobo',
      '10 - Aprobo',
      '8 - Aprobo',
      '7 - Aprobo',
      '10 - Aprobo',
      'No cursa',
      'No cursa'
    ];
    notasAritmanciaGriffindor = [
      'No cursa',
      'No cursa',
      '6 - Aprobo',
      'No cursa',
      '10 - Aprobo',
      'No cursa',
      'No cursa',
      '10 - Aprobo',
      'No cursa',
      'No cursa'
    ];
    notasAdivinacionGriffindor = [
      'No cursa',
      'No cursa',
      '5 - Desaprobo',
      'No cursa',
      'No cursa',
      'No cursa',
      'No cursa',
      'No cursa',
      '6 - Aprobo',
      '3 - Desaprobo'
    ];

  alumnosSlytherin = [
    'Draco Malfoy',
    'Vincent Crabbe',
    'Gregory Goyle',
    'Pansy Parkinson',
    'Blaise Zabini',
    'Millicent Bulstrode',
    'Theodore Nott',
    'Daphne Greengrass',
    'Tracey Davis',
    'Marcus Flint'];

  alumnosHufflepuff = [
    'Cedric Diggory',
    'Hannah Abbott',
    'Ernie Macmillan',
    'Susan Bones',
    'Justin Finch-Fletchley',
    'Zacharias Smith',
    'Wayne Hopkins',
    'Megan Jones',
    'Owen Cauldwell',
    'Laura Madley'];

  alumnosRavenclaw = [
    'Luna Lovegood',
    'Cho Chang',
    'Padma Patil',
    'Terry Boot',
    'Michael Corner',
    'Anthony Goldstein',
    'Roger Davies',
    'Marietta Edgecombe',
    'Penelope Clearwater',
    'Mandy Brocklehurst'];

    hasGriffindor(){
      
    }
    
    hasSlytherin(){

    }
    
    hasHufflepuff(){

    }
    
    hasRavenclaw(){

    }


}