import { Component, OnInit } from '@angular/core';
import { SelectItem } from 'primeng/api';
import { SearchSpellComponent } from '../search-spell/search-spell.component';
import { DialogService, DynamicDialogRef } from 'primeng/dynamicdialog';
import Swal from 'sweetalert2';



interface City {
  name: string,
  code: string
}

@Component({
  selector: 'app-search-wizard',
  standalone: true,
  imports: [],
  templateUrl: './search-wizard.component.html',
  styleUrl: './search-wizard.component.scss'
})

export class SearchWizardComponent implements OnInit {
  //items: SelectItem[];  // Dropdown option

  //cities!: City[];     // Listbox option
  //selectedCity!: City; // Listbox option

  ref: DynamicDialogRef | undefined;

  constructor( public dialogService: DialogService,
               public activeModal: DynamicDialogRef
   ){
    // this.items = [];
    // for (let i = 0; i < 10000; i++) {
    //     this.items.push({ label: 'Item ' + i, value: 'Item ' + i });
    // }
  }

  ngOnInit() {
    // this.cities = [
    //     { name: 'New York', code: 'NY' },
    //     { name: 'Rome', code: 'RM' },
    //     { name: 'London', code: 'LDN' },
    //     { name: 'Istanbul', code: 'IST' },
    //     { name: 'Paris', code: 'PRS' }
    // ];
}

openSpellLookUp(){
    this.ref = this.dialogService.open(SearchSpellComponent, {
      header: 'Spell Search LookUp',
      width: '90rem',
      data: { },
      dismissableMask: true,
      draggable: true,
      keepInViewport: true
  });
}

closeModal() {
  this.activeModal.close();
}

botonAlp2(){
  this.closeModal();
  Swal.fire({
    title: "Te dije que este botón está al p2.",
    width: 650,
    padding: "1em",    
    position:'bottom',
    color: "#716add",
    background: "#fff url(/images/trees.png)",
    backdrop: `
      rgba(0,0,123,0.4)
      url("../../assets/img/nyan-cat.gif")
    `,
  });
}
  
}