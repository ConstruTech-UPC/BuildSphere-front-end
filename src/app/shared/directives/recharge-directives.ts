import {Directive, Input, OnChanges, SimpleChanges, TemplateRef, ViewContainerRef} from "@angular/core";

@Directive({
    standalone: true,
    selector: '[appRechargeDirectives]'
})

export class RechargeDirectives implements OnChanges {
    @Input() appRechargeDirectives!: number;

    constructor(
        private templateRef: TemplateRef<any>,
        private viewContainerRef: ViewContainerRef
    ) {
        this.viewContainerRef.createEmbeddedView(this.templateRef);
    }

    ngOnChanges(changes:SimpleChanges) {
        if (changes['appRechargeDirectives']) {
            this.viewContainerRef.clear();
            this.viewContainerRef.createEmbeddedView(this.templateRef);
        }
    }

}