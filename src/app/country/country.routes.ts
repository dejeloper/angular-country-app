import {Routes} from "@angular/router";
import {CountryLayoutComponent} from "./layouts/CountryLayout/CountryLayout.component";
import {ByCapitalPageComponent} from "./pages/by-capital-page/by-capital-page.component";
import {ByCountryPageComponent} from "./pages/by-country-page/by-country-page.component";
import {ByRegionPageComponent} from "./pages/by-region-page/by-region-page.component";
import {ByPageComponent} from "./pages/by-page/by-page.component";

const countryRoutes: Routes = [
  {
    path: '',
    component: CountryLayoutComponent,
    children: [
      {
        path: 'by-capital',
        component: ByCapitalPageComponent,
      },
      {
        path: '**',
        redirectTo: 'by-capital',
      },
    ]
  }

];

export default countryRoutes;
