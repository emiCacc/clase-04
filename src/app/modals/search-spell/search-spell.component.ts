import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { DynamicDialogRef } from 'primeng/dynamicdialog';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-search-spell',
  standalone: true,
  imports: [],
  templateUrl: './search-spell.component.html',
  styleUrl: './search-spell.component.scss'
})
export class SearchSpellComponent implements AfterViewInit {

  @ViewChild('firstElement', { static: false}) firstElement!:ElementRef;

  constructor (public activeModal: DynamicDialogRef ) {}

  ngAfterViewInit() {
    setTimeout(() => this.firstElement.nativeElement.focus(), 150);
  }

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
