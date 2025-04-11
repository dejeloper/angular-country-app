import {DecimalPipe} from '@angular/common';
import {Component, input, signal} from '@angular/core';
import {Country} from '@app/country/interfaces/country.interface';

@Component({
  selector: 'country-information',
  imports: [DecimalPipe],
  templateUrl: './country-information.component.html',
})
export class CountryInformationComponent {
  country = input.required<Country>();

  currentYear = signal<number>(new Date().getFullYear());

}
