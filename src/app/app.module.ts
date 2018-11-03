import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { MatCardModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ClimatePanelComponent } from './climate-panel/climate-panel.component';

@NgModule({
    declarations: [AppComponent, HeaderComponent, ClimatePanelComponent],
    imports: [BrowserModule, AppRoutingModule, MatCardModule, BrowserAnimationsModule],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {}
