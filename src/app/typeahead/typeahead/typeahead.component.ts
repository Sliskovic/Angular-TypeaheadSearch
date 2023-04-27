import { query } from '@angular/animations';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Observable, Subject, debounceTime, distinctUntilChanged, map, switchMap } from 'rxjs';
import { CategoryService } from 'src/app/core/category.service';
import { WikipediaService } from 'src/app/core/wikipedia.service';
import { Wikipedia } from 'src/app/shared/wikipedia.model';
interface PeopleData {
  name: string;
  birth_year: string;
  height: number;
  weight: number;
  eyeColor: string;
}
export interface Category {
  id: number;
  name: string;
}

@Component({
  selector: 'app-typeahead',
  templateUrl: './typeahead.component.html',
  styleUrls: ['./typeahead.component.css']
})
export class TypeaheadComponent  implements OnInit {
  searchTerm = '';
  filteredCategories: Category[] = [];
  allCategories: Category[] = [];

  allWkipedia: Wikipedia[]= [];

 
  private searchTerms$ = new Subject<string>();
  private searchWikipedia$ = new Subject<string>();

  constructor(private fb: FormBuilder, private http: HttpClient, private categoryService: CategoryService, private wikipediaService: WikipediaService) { 
    // this.form = this.fb.group({
    //   category: ['', Validators.required],
    //   searchInput: ['', Validators.required]
    // });
    // this.form.controls['searchInput'].valueChanges
    // .pipe(debounceTime(500))
    // .subscribe(query => {
    //   if (query && query.length > 2) {
    //     // this.searchWikipedia();
    //   }
    // });
  }
  
  searchInput = new FormControl();
  category = new  FormControl();
  form = new FormGroup({
    searchInput: this.searchInput,
    category: this.category
  })
 
  
  ngOnInit(): void {
   this.categoryService.getCategories().subscribe(res=> {
    this.allCategories = res;
   })

  

  }

  searchCategories(term:string): Observable<Category[]>{
    return this.categoryService.getCategories().pipe(
      map(res=>res.filter(category=>category.name.toLowerCase().includes(term)))
    )
  }
  searchWikipedia(){
    const category = this.form.controls['category'].value;
    const searchInput = this.form.controls['searchInput'].value;
    this.wikipediaService.searchWikipedia(searchInput, category).subscribe(response => {
      this.allWkipedia = response;
      console.log(this.allWkipedia);
      
    });
 }

 onInputChange() {
  this.form.controls.searchInput.valueChanges.pipe(
    debounceTime(500),
    distinctUntilChanged(),
   ).subscribe(searchInput => {
    if (searchInput && searchInput.length > 2) {
      this.searchWikipedia();
    }
   })
  // const query = this.form.controls['searchInput'].value;
  // this.searchWikipedia$.next(query);
  // this.searchWikipedia$.pipe(
  //   debounceTime(500),
  //   distinctUntilChanged(),
  //   switchMap((term:string)=>this.searchCategories(term))
  // )
 }

  onSearch(){
    this.searchTerms$.next(this.searchTerm);
    this.searchTerms$.pipe(
      debounceTime(500),
      distinctUntilChanged(),
      switchMap((term:string)=>this.searchCategories(term))
    ).subscribe((results: Category[])=> {
      if (results && results.length > 2)
      console.log(results);
      this.filteredCategories = results;
    })
  }

  
}
