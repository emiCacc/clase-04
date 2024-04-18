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


}
