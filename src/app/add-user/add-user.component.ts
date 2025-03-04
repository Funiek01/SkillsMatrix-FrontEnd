import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { SdwdsPasswordInputComponent } from '@sdworx/sdwds/password-input';

@Component({
  selector: 'app-add-user',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './add-user.component.html',
  styleUrl: './add-user.component.scss'
})
export class AddUserComponent {
  
  userForm: FormGroup;

  passwordErrors: any = {};
  validatorsStrengths = [
    { color: 'var(--danger)', validators: [] },
    { color: 'var(--warning)', validators: [Validators.minLength(8)] },
    {
      color: 'var(--success)',
      validators: [Validators.minLength(14), Validators.pattern(/[a-z]/), Validators.pattern(/[A-Z]/)],
    },
  ];
  specificValidators = [
    Validators.minLength(14),
    Validators.pattern(/[a-z]/),
    Validators.pattern(/[A-Z]/),
  ];

  constructor(private fb: FormBuilder) {
    this.userForm = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phoneNumber: ['', [Validators.required, Validators.pattern('^[0-9]+$')]],
      hireDate: ['', Validators.required],
      dob: ['', Validators.required],
      position: ['', Validators.required],
      team: ['', Validators.required],
      password: ['', this.specificValidators]
    });
  }
}
