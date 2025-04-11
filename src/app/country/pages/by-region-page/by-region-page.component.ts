import {Component} from '@angular/core';
import {CountryListComponent} from '@app/country/components/country-list/country-list.component';

@Component({
  selector: 'by-region-page',
  imports: [CountryListComponent],
  templateUrl: './by-region-page.component.html',
})
export class ByRegionPageComponent { }
