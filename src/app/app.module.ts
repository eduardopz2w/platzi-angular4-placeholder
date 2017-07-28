import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {NotesComponent} from "./notes/notes.component";
import {FormsModule} from "@angular/forms";
import {ContarClicksDirective} from "./directives/contar-clicks.directive";
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MaterialModule} from "@angular/material";

@NgModule({
    declarations: [
        AppComponent,
        NotesComponent,
        ContarClicksDirective
    ],
    imports: [
        BrowserModule,
        FormsModule,
        BrowserAnimationsModule,
        MaterialModule,
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
