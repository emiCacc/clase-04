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

  /* GRIFFINDOR */
  /* Alumnos */
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
      'Seamus Finnigan'
    ];
  /* Materias obligatorias */
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
  /* Materias opcionales */
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

  /* SLYTHERIN */
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
      'Marcus Flint'
    ];
    /* Materias obligatorias */
    notasPocionesSlytherin = [
      '10 - Aprobo',
      '6 - Aprobo',
      '4 - Desaprobo',
      '6 - Aprobo',
      '9 - Aprobo',
      '9 - Aprobo',
      '7 - Aprobo',
      '5 - Desaprobo',
      '2 - Desaprobo',
      '6 - Aprobo'
    ];
    notasDefensaSlytherin = [
      '10 - Aprobo',
      '8 - Aprobo',
      '6 - Aprobo',
      '9 - Aprobo',
      '4 - Desaprobo',
      '6 - Aprobo',
      '4 - Desaprobo',
      '6 - Aprobo',
      '9 - Aprobo',
      '6 - Aprobo'
    ];
    notasEncantamientosSlytherin = [
      '10 - Aprobo',
      '7 - Aprobo',
      '6 - Aprobo',
      '4 - Desaprobo',
      '9 - Aprobo',
      '6 - Aprobo',
      '8 - Aprobo',
      '7 - Aprobo',
      '6 - Aprobo',
      '4 - Desaprobo',
    ];
    notasHistoriaSlytherin = [
      '6 - Aprobo',
      '4 - Desaprobo',
      '3 - Desaprobo',
      '7 - Aprobo',
      '8 - Aprobo',
      '6 - Aprobo',
      '9 - Aprobo',
      '6 - Aprobo',
      '4 - Desaprobo',
      '9 - Aprobo',
    ];
  /* Materias opcionales */
    notasQuidditchSlytherin = [
      '10 - Aprobo',
      'No cursa',
      'No cursa',
      'No cursa',
      'No cursa',
      'No cursa',
      'No cursa',
      'No cursa',
      'No cursa',
      '10 - Aprobo'
    ];
    notasCriaturasSlytherin = [
      'No cursa',
      'No cursa',
      'No cursa',
      'No cursa',
      'No cursa',
      'No cursa',
      'No cursa',
      'No cursa',
      'No cursa',
      'No cursa'
    ];
    notasAritmanciaSlytherin = [
      'No cursa',
      'No cursa',
      'No cursa',
      'No cursa',
      'No cursa',
      'No cursa',
      'No cursa',
      'No cursa',
      'No cursa',
      'No cursa'
    ];
    notasAdivinacionSlytherin = [
      'No cursa',
      'No cursa',
      'No cursa',
      'No cursa',
      'No cursa',
      'No cursa',
      'No cursa',
      'No cursa',
      'No cursa',
      'No cursa'
    ];
   
  /* HUFFLEPUFF */
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
      'Laura Madley'
    ];
  /* Materias obligatorias */
    notasPocionesHufflepuff = [
      '10 - Aprobo',
      '7 - Aprobo',
      '4 - Desaprobo',
      '3 - Desaprobo',
      '6 - Aprobo',
      '7 - Aprobo',
      '6 - Aprobo',
      '5 - Desaprobo',
      '2 - Desaprobo',
      '9 - Aprobo'
    ];
    notasDefensaHufflepuff = [
      '10 - Aprobo',
      '10 - Aprobo',
      '9 - Aprobo',
      '4 - Desaprobo',
      '5 - Desaprobo',
      '1 - Desaprobo',
      '3 - Desaprobo',
      '3 - Desaprobo',
      '9 - Aprobo',
      '7 - Aprobo'
    ];
    notasEncantamientosHufflepuff = [
      '10 - Aprobo',
      '9 - Aprobo',
      '9 - Aprobo',
      '4 - Desaprobo',
      '7 - Aprobo',
      '6 - Aprobo',
      '4 - Desaprobo',
      '7 - Aprobo',
      '5 - Desaprobo',
      '2 - Desaprobo',
    ];
    notasHistoriaHufflepuff = [
      '7 - Aprobo',
      '8 - Aprobo',
      '7 - Aprobo',
      '10 - Aprobo',
      '8 - Aprobo',
      '5 - Desaprobo',
      '9 - Aprobo',
      '6 - Aprobo',
      '4 - Desaprobo',
      '9 - Aprobo',
    ];
  /* Materias opcionales */
    notasQuidditchHufflepuff = [
      '10 - Aprobo',
      'No cursa',
      'No cursa',
      'No cursa',
      'No cursa',
      '10 - Aprobo',
      'No cursa',
      'No cursa',
      '9 - Aprobo',
      'No cursa',
    ];
    notasCriaturasHufflepuff = [
      'No cursa',
      '10 - Aprobo',
      'No cursa',
      'No cursa',
      'No cursa',
      'No cursa',
      'No cursa',
      '10 - Aprobo',
      'No cursa',
      'No cursa'
    ];
    notasAritmanciaHufflepuff = [
      'No cursa',
      'No cursa',
      'No cursa',
      '10 - Aprobo',
      'No cursa',
      'No cursa',
      'No cursa',
      'No cursa',
      'No cursa',
      'No cursa'
    ];
    notasAdivinacionHufflepuff = [
      'No cursa',
      'No cursa',
      '8 - Aprobo',
      'No cursa',
      'No cursa',
      'No cursa',
      'No cursa',
      'No cursa',
      '8 - Aprobo',
      '7 - Aprobo'
    ];


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