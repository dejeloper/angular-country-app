import {Component, inject, signal} from '@angular/core';
import {rxResource} from '@angular/core/rxjs-interop';
import {CountryListComponent} from '@app/country/components/country-list/country-list.component';
import {Region} from '@app/country/interfaces/region.type';
import {CountryService} from '@app/country/services/country.service';
import {of} from 'rxjs';

@Component({
  selector: 'by-region-page',
  imports: [CountryListComponent],
  templateUrl: './by-region-page.component.html',
})
export class ByRegionPageComponent {
  countryService = inject(CountryService);

  public regions: Region[] = [
    'Africa',
    'Americas',
    'Asia',
    'Europe',
    'Oceania',
    'Antarctic',
  ];


  selectedRegion = signal<Region | null>(null);

  selectRegion(region: Region) {
    this.selectedRegion.set(region);
  }

  countryResource = rxResource({
    request: () => ({region: this.selectedRegion()}),
    loader: ({request}) => {
      if (!request.region) return of([]);

      return this.countryService.searchByRegion(request.region)
    }
  })

}
