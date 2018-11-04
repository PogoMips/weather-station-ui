import { Component, Input, OnInit } from '@angular/core';

@Component({
    selector: 'app-humidity-panel',
    templateUrl: './humidity-panel.component.html',
    styleUrls: ['./humidity-panel.component.scss']
})
export class HumidityPanelComponent implements OnInit {
    @Input()
    public indoor = true;

    @Input()
    public humidity = 0;

    @Input()
    public high = 0;

    @Input()
    public low = 0;

    constructor() {}

    ngOnInit() {}
}
