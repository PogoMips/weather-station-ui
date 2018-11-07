import { Component, OnInit } from '@angular/core';
import { BackendService, IDashboardData } from './backend.service';
import { timer } from 'rxjs';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
    public sensorData: IDashboardData;

    constructor(private backendService: BackendService) {}

    ngOnInit() {
        timer(0, 5000).subscribe(() => {
            this.backendService.getCurrent().subscribe((current: IDashboardData) => {
                this.sensorData = current;
            });
        });
    }
}
