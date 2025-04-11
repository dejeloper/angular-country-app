import {DecimalPipe} from '@angular/common';
import {Component, input} from '@angular/core';
import {RouterLink} from '@angular/router';
import {Country} from '@app/country/interfaces/country.interface';

@Component({
  selector: 'country-list',
  imports: [RouterLink, DecimalPipe],
  templateUrl: './country-list.component.html',
})
export class CountryListComponent {

  countries = input.required<Country[]>();

  errorMessage = input<string | unknown | null>(null);
  isLoading = input<boolean>(false);
  isEmpty = input<boolean>(false);

}
