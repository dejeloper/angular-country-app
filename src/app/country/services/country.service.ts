import {HttpClient} from '@angular/common/http';
import {inject, Injectable} from '@angular/core';
import {RESTCountry} from '../interfaces/rest-country.interface';
import {map, Observable, catchError, throwError} from 'rxjs';
import {Country} from '../interfaces/country.interface';
import {CountryMapper} from '../mappers/country.mapper';

const API_URL = 'https://restcountries.com/v3.1';

@Injectable({providedIn: 'root'})
export class CountryService {

  private http = inject(HttpClient);


  searchByCapital(query: string): Observable<Country[]> {
    query = query.toLowerCase();

    return this.http.get<RESTCountry[]>(`${API_URL}/capital/${query}`)
      .pipe(
        map(RestCountry => CountryMapper.mapRestCountryToCountries(RestCountry)),
        catchError(({error}) => {
          console.log(`Error fetching data: ${error.message}`);

          return throwError(() => new Error(`No se pudo encontrar el capital '${query}'`));
        })
      );
  }

  searchByCountry(query: string): Observable<Country[]> {
    query = query.toLowerCase();

    return this.http.get<RESTCountry[]>(`${API_URL}/name/${query}`)
      .pipe(
        map(RestCountry => CountryMapper.mapRestCountryToCountries(RestCountry)),
        catchError(({error}) => {
          console.log(`Error fetching data: ${error.message}`);

          return throwError(() => new Error(`No se pudo encontrar el país '${query}'`));
        })
      );
  }
}
