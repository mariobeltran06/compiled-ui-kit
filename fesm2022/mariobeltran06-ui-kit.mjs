import * as i0 from '@angular/core';
import { EventEmitter, Output, Input, ViewEncapsulation, Component, NgModule } from '@angular/core';
import * as i1 from '@angular/common';
import { CommonModule } from '@angular/common';

class ButtonComponent {
    label = 'Click';
    color = 'primary';
    clickEvent = new EventEmitter();
    onClick() {
        this.clickEvent.emit();
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "20.1.6", ngImport: i0, type: ButtonComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "20.1.6", type: ButtonComponent, isStandalone: false, selector: "cus-button", inputs: { label: "label", color: "color" }, outputs: { clickEvent: "clickEvent" }, ngImport: i0, template: "<button\n    class=\"\"\n      [ngClass]=\"[\n        color === 'primary' ? 'primary' : '',\n        color === 'secondary' ? 'secondary' : ''\n      ]\"\n      (click)=\"onClick()\"\n    >\n      {{ label }}\n    </button>", styles: ["button{transition:background-color .2s;font-weight:500;padding:8px;border-radius:10px}.primary{background-color:green;color:#fff}.secondary{background-color:#00f;color:#fff}\n"], dependencies: [{ kind: "directive", type: i1.NgClass, selector: "[ngClass]", inputs: ["class", "ngClass"] }], encapsulation: i0.ViewEncapsulation.None });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.1.6", ngImport: i0, type: ButtonComponent, decorators: [{
            type: Component,
            args: [{ selector: 'cus-button', standalone: false, encapsulation: ViewEncapsulation.None, template: "<button\n    class=\"\"\n      [ngClass]=\"[\n        color === 'primary' ? 'primary' : '',\n        color === 'secondary' ? 'secondary' : ''\n      ]\"\n      (click)=\"onClick()\"\n    >\n      {{ label }}\n    </button>", styles: ["button{transition:background-color .2s;font-weight:500;padding:8px;border-radius:10px}.primary{background-color:green;color:#fff}.secondary{background-color:#00f;color:#fff}\n"] }]
        }], propDecorators: { label: [{
                type: Input
            }], color: [{
                type: Input
            }], clickEvent: [{
                type: Output
            }] } });

class ButtonModule {
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "20.1.6", ngImport: i0, type: ButtonModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
    static ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "20.1.6", ngImport: i0, type: ButtonModule, declarations: [ButtonComponent], imports: [CommonModule], exports: [ButtonComponent] });
    static ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "20.1.6", ngImport: i0, type: ButtonModule, imports: [CommonModule] });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.1.6", ngImport: i0, type: ButtonModule, decorators: [{
            type: NgModule,
            args: [{
                    imports: [
                        CommonModule
                    ],
                    declarations: [ButtonComponent],
                    exports: [ButtonComponent]
                }]
        }] });

class UiKitModule {
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "20.1.6", ngImport: i0, type: UiKitModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
    static ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "20.1.6", ngImport: i0, type: UiKitModule, imports: [ButtonModule], exports: [ButtonModule] });
    static ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "20.1.6", ngImport: i0, type: UiKitModule, imports: [ButtonModule, ButtonModule] });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.1.6", ngImport: i0, type: UiKitModule, decorators: [{
            type: NgModule,
            args: [{
                    imports: [ButtonModule],
                    exports: [ButtonModule],
                }]
        }] });

/*
 * Public API Surface of ui-kit
 */
//MODULE UI KIT

/**
 * Generated bundle index. Do not edit.
 */

export { ButtonComponent, ButtonModule, UiKitModule };
//# sourceMappingURL=mariobeltran06-ui-kit.mjs.map
