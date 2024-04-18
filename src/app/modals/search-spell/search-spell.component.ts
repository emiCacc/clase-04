import { Component } from '@angular/core';
import { DynamicDialogRef } from 'primeng/dynamicdialog';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-search-spell',
  standalone: true,
  imports: [],
  templateUrl: './search-spell.component.html',
  styleUrl: './search-spell.component.scss'
})
export class SearchSpellComponent {

  constructor (public activeModal: DynamicDialogRef ) {}

  closeModal(){
    this.activeModal.close()
  }

  botonAlp2(){
    this.closeModal();
    
    Swal.fire({
      title: "Este botón está al p2.",
      width: 600,
      padding: "3em",
      color: "#716add",
      background: "#fff url(/images/trees.png)",
      backdrop: `
        rgba(0,0,123,0.4)
        url("/images/nyan-cat.gif")
        left top
        no-repeat
      `
    });
  }

}
