import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { Category } from '../shared/category.model';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {


  private apiUrl = 'https://opentdb.com/api_category.php';

  constructor(private http: HttpClient) { }

  getCategories(): Observable<Category[]> {
    return this.http.get<{ trivia_categories: Category[] }>(this.apiUrl)
    .pipe(
      map((response) => response.trivia_categories)
    );
  }
}
