import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../environments/environment';

export interface IDashboardData {
    temperature: number;
    temperatureLow: number;
    temperatureHigh: number;
    humidity: number;
    humidityLow: number;
    humidityHigh: number;
}

@Injectable({
    providedIn: 'root'
})
export class BackendService {
    constructor(private httpClient: HttpClient) {}

    public getCurrent(): Observable<IDashboardData> {
        return this.httpClient.get<IDashboardData>(environment.baseUrl + 'current');
    }
}
