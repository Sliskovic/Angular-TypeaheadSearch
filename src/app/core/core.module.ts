import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { CategoryService } from './category.service';
import { WikipediaService } from './wikipedia.service';
import { LocalStorageService } from './local-storage.service';



@NgModule({
  declarations: [],
  imports: [
    HttpClientModule,
    CommonModule
  ],
  providers: [
    CategoryService,
    WikipediaService,
    LocalStorageService
  ]
})
export class CoreModule { }
