import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Lista-Morales';
  // @HostListener('contextmenu', ['$event'])
  //   onRightClick(event: MouseEvent) {
  //   event.preventDefault();
  // }
  // @HostListener('document:keydown', ['$event'])
  // onKeyDown(event: KeyboardEvent) {
  //   if (event.key === 'F12') {
  //     event.preventDefault();
  //   }
  // }

}
