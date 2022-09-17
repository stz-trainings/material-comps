// Angular Modules
import { AppRoutingModule } from './app-routing.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';



// Components ///////////////////////////////////////////
import { AppComponent } from './app.component';
import { AutocompleteV1Component } from './autocomplete/autocomplete-v1/autocomplete-v1.component';
import { AutocompleteV2Component } from './autocomplete/autocomplete-v2/autocomplete-v2.component';
import { ButtonV1Component } from './button/button-v1/button-v1.component';
import { ButtonV2Component } from './button/button-v2/button-v2.component';
import { TableV1Component } from './table/table-v1/table-v1.component';
import { TableV2Component } from './table/table-v2/table-v2.component';

// Angular Material Modules ///////////////////////////////////////
import {MatTableModule} from '@angular/material/table';

const matModules = [
  MatTableModule
]



@NgModule({
  declarations: [
    AppComponent,

    /////////////////////////////////////////
    AutocompleteV1Component,
    AutocompleteV2Component,
    ButtonV1Component,
    ButtonV2Component,
    TableV1Component,
    TableV2Component,

    //////////////////////////////////////////
  ],

  imports: [
    AppRoutingModule,
    BrowserModule,
    BrowserAnimationsModule,
    ...matModules
  ],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
