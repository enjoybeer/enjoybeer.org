import { Component, OnInit } from '@angular/core';
import { animate, state, style, transition, trigger } from '@angular/animations';

@Component({
    selector: 'beer-app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.less'],
    animations: [
        trigger('flyInFromBottom', [
            state('active', style({
                opacity: '1',
                transform: 'translateY(0%)'
            })),
            transition('void => active', animate('500ms 5.5s ease-in-out'))
        ])
    ]
})
export class AppComponent implements OnInit {
    contentState: string;

    ngOnInit(): void {
        this.contentState  = 'active';
    }
}
