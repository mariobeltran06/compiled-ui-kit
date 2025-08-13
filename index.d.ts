import * as i0 from '@angular/core';
import { EventEmitter } from '@angular/core';
import * as i2 from '@angular/common';

declare class ButtonComponent {
    label: string;
    color: 'primary' | 'secondary';
    clickEvent: EventEmitter<void>;
    onClick(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<ButtonComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<ButtonComponent, "cus-button", never, { "label": { "alias": "label"; "required": false; }; "color": { "alias": "color"; "required": false; }; }, { "clickEvent": "clickEvent"; }, never, never, false, never>;
}

declare class ButtonModule {
    static ɵfac: i0.ɵɵFactoryDeclaration<ButtonModule, never>;
    static ɵmod: i0.ɵɵNgModuleDeclaration<ButtonModule, [typeof ButtonComponent], [typeof i2.CommonModule], [typeof ButtonComponent]>;
    static ɵinj: i0.ɵɵInjectorDeclaration<ButtonModule>;
}

declare class UiKitModule {
    static ɵfac: i0.ɵɵFactoryDeclaration<UiKitModule, never>;
    static ɵmod: i0.ɵɵNgModuleDeclaration<UiKitModule, never, [typeof ButtonModule], [typeof ButtonModule]>;
    static ɵinj: i0.ɵɵInjectorDeclaration<UiKitModule>;
}

export { ButtonComponent, ButtonModule, UiKitModule };
