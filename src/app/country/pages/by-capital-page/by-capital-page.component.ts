import {Component, inject, signal} from '@angular/core';
import {rxResource} from '@angular/core/rxjs-interop';
import {CountryListComponent} from '@app/country/components/country-list/country-list.component';
import {SearchInputComponent} from '@app/country/components/country-search-input/country-search-input.component';
import {CountryService} from '@app/country/services/country.service';

import {of} from 'rxjs';

@Component({
  selector: 'by-capital-page',
  imports: [SearchInputComponent, CountryListComponent],
  templateUrl: './by-capital-page.component.html',
})
export class ByCapitalPageComponent {

  countryService = inject(CountryService);
  query = signal<string>('');

  countryResource = rxResource({
    request: () => ({query: this.query()}),
    loader: ({request}) => {
      if (!request.query) return of([]);

      return this.countryService.searchByCapital(request.query)
    }
  })



  // isLoading = signal(false);
  // isError = signal<string | null>(null);
  // countries = signal<Country[]>([]);

  // onSearch(query: string) {
  //   if (this.isLoading()) return;

  //   this.isLoading.set(true);
  //   this.isError.set(null);

  //   this.countryService.searchByCapital(query)
  //     .subscribe({
  //       next: (countries) => {
  //         this.countries.set(countries);
  //         this.isLoading.set(false);
  //       },
  //       error: (error) => {
  //         this.countries.set([]);
  //         this.isLoading.set(false);
  //         this.isError.set(error);
  //       }
  //     });
  // }

}
