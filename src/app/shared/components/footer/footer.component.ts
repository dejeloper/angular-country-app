import {Component, signal} from '@angular/core';

@Component({
  selector: 'app-footer',
  imports: [],
  templateUrl: './footer.component.html',
})
export class FooterComponent {

  currentYear = signal<number>(new Date().getFullYear());

}
