import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TypeaheadComponent } from './typeahead/typeahead.component';
import { ResultModule } from '../result/result.module';



@NgModule({
  declarations: [
    TypeaheadComponent
  ],
  imports: [
    CommonModule,
    ResultModule
  ]
})
export class TypeaheadModule { }
