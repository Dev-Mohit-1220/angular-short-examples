import { Component, inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'mike-form-viewer',
  templateUrl: './form-viewer.component.html',
  styleUrl: './form-viewer.component.scss',
})
export class FormViewerComponent implements OnInit {
  userForm: FormGroup | undefined;
  
  ngOnInit(): void {
    this.userForm = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      name: new FormControl('', [Validators.required]),
    });
  }

  onSubmitForm(): void {
    this.userForm?.markAllAsTouched();
    if (this.userForm && this.userForm.valid) {
      console.log(this.userForm.getRawValue());
    }
  }
}
