import {Country} from "../interfaces/country.interface";
import {RESTCountry} from "../interfaces/rest-country.interface";

export class CountryMapper {

  static mapRestCountryToCountry(country: RESTCountry): Country {
    return {
      cca2: country.cca2,
      flag: country.flag,
      flagSvg: country.flags.svg,
      name: country.name.common,
      nameSpanish: country.translations["spa"].common ?? country.name.common,
      capital: country.capital.join(', '),
      population: country.population,
      details: country.altSpellings.join(' - '),
      region: country.region,
      subRegion: country.subregion,
    };
  }

  static mapRestCountryToCountries(countries: RESTCountry[]): Country[] {
    return countries.map(country => this.mapRestCountryToCountry(country));
  }
}
