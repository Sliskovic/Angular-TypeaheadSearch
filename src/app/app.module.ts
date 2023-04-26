import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { TypeaheadModule } from './typeahead/typeahead.module';
import { ResultModule } from './result/result.module';
import { RouterModule, Routes } from '@angular/router';
import { TypeaheadComponent } from './typeahead/typeahead/typeahead.component';

const routes: Routes = [
  {path: '', component: TypeaheadComponent},
]

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    CoreModule,
    TypeaheadModule,
    ResultModule,
    RouterModule.forRoot(routes),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

