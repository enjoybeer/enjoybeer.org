import { AfterViewInit, Component, OnInit } from '@angular/core';
import { animate, state, style, transition, trigger } from '@angular/animations';


@Component({
    selector: 'beer-app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.less'],
    animations: [
        trigger('flyInFromBottom', [
            state('active', style({
                opacity: '1',
                transform: 'translate3D(0, 0, 0)'
            })),
            transition('void => active', animate('500ms 5.5s ease-in-out'))
        ])
    ]
})
export class AppComponent implements OnInit, AfterViewInit {
    contentState: string;
    showMain = false;

    ngOnInit(): void {
        this.contentState  = 'active';

        setTimeout(() => {
            this.showMain = true;
        }, 5500);
    }

    ngAfterViewInit(): void {
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
    }
}
