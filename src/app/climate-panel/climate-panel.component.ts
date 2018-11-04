import { Component, Input, OnInit } from '@angular/core';

@Component({
    selector: 'app-climate-panel',
    templateUrl: './climate-panel.component.html',
    styleUrls: ['./climate-panel.component.scss']
})
export class ClimatePanelComponent implements OnInit {
    @Input()
    public indoor = true;

    @Input()
    set temp(value: number) {
        this.integerPart = Math.floor(value);
        this.decimalPart = (value - this.integerPart).toFixed(1).substring(2);
    }
    public integerPart = 0;
    public decimalPart = '';

    @Input()
    public high = 0;

    @Input()
    public low = 0;

    constructor() {}

    ngOnInit() {}
}
