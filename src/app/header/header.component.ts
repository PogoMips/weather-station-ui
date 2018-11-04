import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription, timer } from 'rxjs';

const daysOfWeek = ['Sonntag', 'Montag', 'Dienstag', 'Mittwoch', 'Donnerstag', 'Freitag', 'Samstag'];

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit, OnDestroy {
    public time: Date;
    private timerSub: Subscription;

    constructor() {}

    ngOnInit() {
        this.timerSub = timer(0, 1000).subscribe(() => {
            this.time = new Date();
        });
    }

    public getDay(): string {
        const date = new Date();
        return daysOfWeek[date.getDay()];
    }

    public getDate() {
        return new Date();
    }

    ngOnDestroy() {
        this.timerSub.unsubscribe();
    }
}
