import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss'],
})
export class FormComponent {
  quizForm = new FormGroup({
    count: new FormControl(1, {
      validators: [
        Validators.required,
        Validators.min(1),
        Validators.max(100),
        Validators.pattern(/^^[0-9]+$/),
      ],
      nonNullable: true,
    }),
  });

  get controls() {
    return this.quizForm.controls;
  }

  getErrorMessage(control: FormControl) {
    if (control.hasError('required')) {
      return 'This field is required!';
    }
    if (control.hasError('min')) {
      return 'Count of questions must be greater than 1!';
    }
    if (control.hasError('max')) {
      return 'Count of questions must be less than 100!';
    }
    if (control.hasError('pattern')) {
      return 'Only integers!';
    }

    return '';
  }

  onSubmit() {}
}
