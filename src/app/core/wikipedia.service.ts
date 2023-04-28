import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Wikipedia } from '../shared/wikipedia.model';
import { environment } from 'src/environments/environment';
import { Observable, catchError, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WikipediaService {

  private url = environment.wikiBaseUrl;
  constructor(private http:  HttpClient) { }

  searchWikipedia(term: string, category: string){
    return this.http.get<Wikipedia[]>(this.url, {
      params: {
        action: 'query', 
        list: 'search',
        srsearch: term + category,
        utf8: '1',
        format: 'json',
        origin: '*'
      }
    })
    .pipe(
      catchError(this.handleError<Wikipedia[]>('data', [])));
  }
  
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.log(`${operation} failed: ${error.message}`);
      return of(result as T);
    };
  }
}
