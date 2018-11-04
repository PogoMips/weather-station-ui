import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { MatCardModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ClimatePanelComponent } from './climate-panel/climate-panel.component';
import { HumidityPanelComponent } from './humidity-panel/humidity-panel.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
    declarations: [AppComponent, HeaderComponent, ClimatePanelComponent, HumidityPanelComponent],
    imports: [BrowserModule, AppRoutingModule, MatCardModule, BrowserAnimationsModule, HttpClientModule],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {}
