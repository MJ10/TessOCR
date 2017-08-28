import { HttpModule } from '@angular/http';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// import { MdToolbarModule, MdButtonModule, MdIconModule } from '@angular/material';

import { AppComponent } from './app.component';
import { ImageService } from './image.service';

@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule,
        HttpModule,
        // MdToolbarModule,
        // MdButtonModule,
        // MdIconModule
    ],
    providers: [ImageService],
    bootstrap: [AppComponent]
})
export class AppModule { }
