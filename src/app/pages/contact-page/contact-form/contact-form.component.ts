import {Component, Input} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'anselm-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.scss']
})
export class ContactFormComponent {

  @Input() email: string;

  contactForm: FormGroup;

  constructor(formBuilder: FormBuilder) {
    this.contactForm = formBuilder.group({
      name: ['', Validators.required],
      email: ['', Validators.required],
      text: ['', Validators.required]
    });
  }
}
