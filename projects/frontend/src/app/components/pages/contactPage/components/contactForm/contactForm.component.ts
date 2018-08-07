import {Component} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'contact-form-component',
  templateUrl: './contactForm.component.html',
  styleUrls: ['./contactForm.component.scss']
})
export class ContactFormComponent {
  contactForm: FormGroup;

  constructor(formBuilder: FormBuilder) {
    this.contactForm = formBuilder.group({
      name: ['', Validators.required],
      email: ['', Validators.required],
      text: ['', Validators.required]
    });
  }
}
