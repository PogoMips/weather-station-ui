import { Component, OnInit } from '@angular/core';
import { BackendService, IDashboardData } from './backend.service';
import { timer } from 'rxjs';
import { IWeather } from './weather.model';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
    public sensorData: IDashboardData;
    public weatherData: IWeather;

    constructor(private backendService: BackendService) {}

    ngOnInit() {
        timer(0, 5000).subscribe(() => {
            this.backendService.getCurrent().subscribe((current: IDashboardData) => {
                this.sensorData = current;
            });
        });
        timer(0, 60000).subscribe(() => {
            this.backendService.getWeather().subscribe((current: IWeather) => {
                this.weatherData = current;
            });
        });
    }
}
