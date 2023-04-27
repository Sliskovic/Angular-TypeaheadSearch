import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TypeaheadComponent } from './typeahead/typeahead.component';
import { ResultModule } from '../result/result.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    TypeaheadComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    ResultModule
  ],
  exports: [TypeaheadComponent]
})
export class TypeaheadModule { }
