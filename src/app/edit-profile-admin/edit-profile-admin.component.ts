import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-edit-profile-admin',
  imports: [ReactiveFormsModule],
  templateUrl: './edit-profile-admin.component.html',
  styleUrl: './edit-profile-admin.component.scss'
})
export class EditProfileAdminComponent {
  positions: string[] = ['Software Engineer', 'Project Manager', 'HR Manager', 'Designer', 'QA Engineer'];
  teams: string[] = ['A-Team', 'B-Team', 'HR'];

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

      });
    }

}
