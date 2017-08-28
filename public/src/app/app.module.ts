import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpModule } from '@angular/http';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { MdToolbarModule, MdButtonModule, MdIconModule,
            MdMenuModule, MdDialogModule } from '@angular/material';

import { AboutDialogComponent, AppComponent } from './app.component';
import { ImageService } from './image.service';

@NgModule({
    declarations: [
        AppComponent,
        AboutDialogComponent
    ],
    imports: [
        BrowserModule,
        HttpModule,
        MdToolbarModule,
        MdButtonModule,
        MdIconModule,
        MdMenuModule,
        BrowserAnimationsModule,
        MdDialogModule
    ],
    providers: [ImageService],
    bootstrap: [AppComponent],
    entryComponents: [AboutDialogComponent]
})
export class AppModule { }
