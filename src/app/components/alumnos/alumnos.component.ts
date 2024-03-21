import { Component } from '@angular/core';

@Component({
  selector: 'app-alumnos',
  templateUrl: './alumnos.component.html',
  styleUrls: ['./alumnos.component.scss']
})
export class AlumnosComponent {

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