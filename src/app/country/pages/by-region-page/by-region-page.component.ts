import {Component, inject, linkedSignal} from '@angular/core';
import {rxResource} from '@angular/core/rxjs-interop';
import {Router, ActivatedRoute} from '@angular/router';
import {CountryListComponent} from '@app/country/components/country-list/country-list.component';
import {Region} from '@app/country/interfaces/region.type';
import {CountryService} from '@app/country/services/country.service';
import {of} from 'rxjs';


function validateQueryParam(queryParam: string): Region {
  queryParam = queryParam.toLowerCase();

  const validRegions: Record<string, Region> = {
    'africa': 'Africa',
    'americas': 'Americas',
    'asia': 'Asia',
    'europe': 'Europe',
    'oceania': 'Oceania',
    'antarctic': 'Antarctic',
  };

  return validRegions[queryParam] ?? 'Americas';
}

@Component({
  selector: 'by-region-page',
  imports: [CountryListComponent],
  templateUrl: './by-region-page.component.html',
})
export class ByRegionPageComponent {
  countryService = inject(CountryService);
  router = inject(Router);
  activatedRoute = inject(ActivatedRoute);

  queryParam = this.activatedRoute.snapshot.queryParamMap.get('region') ?? '';

  public regions: Region[] = [
    'Africa',
    'Americas',
    'Asia',
    'Europe',
    'Oceania',
    'Antarctic',
  ];

  selectedRegion = linkedSignal<Region>(() => validateQueryParam(this.queryParam));

  selectRegion(region: Region) {
    this.selectedRegion.set(region);
  }

  countryResource = rxResource({
    request: () => ({region: this.selectedRegion()}),
    loader: ({request}) => {
      if (!request.region) return of([]);

      this.router.navigate(['/country/by-region'], {
        queryParams: {
          region: request.region
        }
      });

      return this.countryService.searchByRegion(request.region)
    }
  })

}
