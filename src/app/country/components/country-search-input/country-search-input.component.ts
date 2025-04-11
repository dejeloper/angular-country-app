import {Component, input, output} from '@angular/core';

@Component({
  selector: 'country-search-input',
  imports: [],
  templateUrl: './country-search-input.component.html',
})
export class SearchInputComponent {
  placeholder = input('Buscar')

  value = output<string>();

}
