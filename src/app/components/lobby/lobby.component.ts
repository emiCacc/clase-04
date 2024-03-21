import { Component } from '@angular/core';

@Component({
  selector: 'app-lobby',
  templateUrl: './lobby.component.html',
  styleUrls: ['./lobby.component.scss']
})

export class LobbyComponent {

  pociones: boolean = false;
  defensa: boolean = false;
  encantamientos: boolean = false;
  historia: boolean = false;
  quidditch: boolean = false;
  criaturas: boolean = false;
  aritmancia: boolean = false;
  adivinacion: boolean = false;

  materiaSeleccionada: string = '';

  dropdownOptions = [
    { label: 'Materias obligatorias', value: 'obligatorias' },
    { label: 'Materias opcionales', value: 'opcionales' }
  ];

  constructor() { }

  onDropdownChange(event: any) {
    this.materiaSeleccionada = event.value;
    const opcionSeleccionada = this.dropdownOptions.find(opcion => opcion.value === event.value);
  }

  resetButtons() {
    this.pociones = false;
    this.defensa = false;
    this.encantamientos = false;
    this.historia = false;
    this.quidditch = false;
    this.criaturas = false;
    this.aritmancia = false;
    this.adivinacion = false;
  }

  requestPociones() {   
    console.log("click pociones")
    this.resetButtons(); 
    this.pociones = true;
  }

  requestDefensa(){    
    console.log("click defensa")
    this.resetButtons();
    this.defensa = true;
  }

  requestEncantamientos(){ 
    console.log("click encantamientos")
    this.resetButtons();   
    this.encantamientos = true;
  }

  requestHistoria(){   
    console.log("click historia")
    this.resetButtons(); 
    this.historia = true;
  }

  requestQuidditch(){
    console.log("click quidditch")
    this.resetButtons();
    this.quidditch = true;
  }
  
  requestCriaturas(){   
    console.log("click criaturas")
    this.resetButtons();
    this.criaturas = true;
  }
  
  requestAritmancia(){   
    console.log("click aritmancia")
    this.resetButtons();
    this.aritmancia = true;
  }
  
  requestAdivinacion(){  
    console.log("click adivinacion")
    this.resetButtons();  
    this.adivinacion = true;
  }
}
