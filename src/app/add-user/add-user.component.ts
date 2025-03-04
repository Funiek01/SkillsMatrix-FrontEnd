import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, NgModel, ReactiveFormsModule, Validators } from '@angular/forms';
import { customPatternValidator, PasswordStrength, SdwdsPasswordInputComponent } from '@sdworx/sdwds/password-input';
import '@angular/localize/init';

@Component({
  selector: 'app-add-user',
  standalone: true,
  imports: [ReactiveFormsModule, SdwdsPasswordInputComponent],
  templateUrl: './add-user.component.html',
  styleUrl: './add-user.component.scss'
})
export class AddUserComponent {
  userForm: FormGroup; 
  constructor(private fb: FormBuilder) { 
    this.userForm = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phoneNumber: ['', Validators.required],
      hireDate: ['', Validators.required],
      dob: ['', Validators.required],
      position: ['', Validators.required],
      team: ['', Validators.required],
      password: this.reactiveValidatorsPassword
    });
  }

  reactiveValidatorsPassword = new FormControl('', Validators.required);
  reactiveValidatorsErrors: any = {};
  
  validatorsStrengths: PasswordStrength[] = [
    { color: 'var(--danger)', validators: [] },
    {
      color: 'var(--warning)',
      validators: [Validators.minLength(8)],
    },
    {
      color: 'var(--success)',
      validators: [Validators.minLength(14), Validators.pattern(/[a-z]/), Validators.pattern(/[A-Z]/)],
    },
  ];

  specificValidators = [
    Validators.minLength(14),
    customPatternValidator(/[a-z]/, 'lowercaseRequired'),
    customPatternValidator(/[A-Z]/, 'uppercaseRequired'),
  ];
}

