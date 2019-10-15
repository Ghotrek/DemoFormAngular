import { AbstractControl } from '@angular/forms';

export function CustomValidators(control: AbstractControl): {[s: string]: boolean} | null {
    if (control.value === 'Test') {
        return {'invalidProjectName': true};
    }
    return null;
}
