import { Component, OnInit } from '@angular/core';
import { animate, AnimationEvent, state, style, transition, trigger } from '@angular/animations';


@Component({
    selector: 'beer-pour',
    templateUrl: './beer-pour.component.html',
    styleUrls: ['./beer-pour.component.less'],
    animations: [
        trigger('pourState', [
            state('active', style({
                height: '360px'
            })),
            state('deactive', style({
                transform: 'translateX(-50%) translateY(-400px)'
            })),
            transition('void => active', animate('1.6s 2s ease-in')),
            transition('active => deactive', animate('620ms ease-out'))
        ]),
        trigger('liquidState', [
            state('active', style({
                height: '202px'
            })),
            transition('void => active', animate('2.2s 3700ms ease-in-out'))
        ]),
        trigger('foamState', [
            state('active', style({
                bottom: '212px'
            })),
            transition('void => active', animate('2.2s 3700ms ease-in-out'))
        ])
    ]
})
export class BeerPourComponent implements OnInit {
    pourState: string;
    liquidState: string;
    foamState: string;

    constructor() {
    }

    ngOnInit() {
        this.pourState = 'active';
        this.liquidState = 'active';
        this.foamState = 'active';
    }

    onPourAnimationDone(event: AnimationEvent): void {
        if (event.fromState === 'void' && event.toState === 'active') {
            setTimeout(() => {
                this.pourState = 'deactive';
            }, 2000);
        }
    }
}
