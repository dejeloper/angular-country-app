import {Component, inject, signal} from '@angular/core';
import {rxResource} from '@angular/core/rxjs-interop';
import {CountryListComponent} from '@app/country/components/country-list/country-list.component';
import {SearchInputComponent} from '@app/country/components/country-search-input/country-search-input.component';
import {CountryService} from '@app/country/services/country.service';
import {of} from 'rxjs';

@Component({
  selector: 'by-country-page',
  imports: [SearchInputComponent, CountryListComponent],
  templateUrl: './by-country-page.component.html',
})
export class ByCountryPageComponent {

  countryService = inject(CountryService);
  query = signal<string>('');

  countryResource = rxResource({
    request: () => ({query: this.query()}),
    loader: ({request}) => {
      if (!request.query) return of([]);

      return this.countryService.searchByCountry(request.query)
    }
  })
}
