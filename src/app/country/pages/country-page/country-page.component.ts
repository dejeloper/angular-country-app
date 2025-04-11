import {Component, inject} from '@angular/core';
import {rxResource} from '@angular/core/rxjs-interop';
import {ActivatedRoute} from '@angular/router';
import {CountryService} from '@app/country/services/country.service';
import {NotFoundComponent} from '@app/shared/components/not-found/not-found.component';

@Component({
  selector: 'country-page',
  imports: [NotFoundComponent],
  templateUrl: './country-page.component.html',
})
export class CountryPageComponent {

  countryCode = inject(ActivatedRoute).snapshot.params['code'];
  countryService = inject(CountryService);

  countryResource = rxResource({
    request: () => ({code: this.countryCode}),
    loader: ({request}) => {
      return this.countryService.searchCountryByCode(request.code)
    }
  })

}
