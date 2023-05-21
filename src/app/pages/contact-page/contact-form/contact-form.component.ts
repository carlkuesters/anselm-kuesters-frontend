import {Component, Input} from '@angular/core';
import {UntypedFormBuilder, UntypedFormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'anselm-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.scss']
})
export class ContactFormComponent {

  @Input() email: string;

  contactForm: UntypedFormGroup;

  constructor(formBuilder: UntypedFormBuilder) {
    this.contactForm = formBuilder.group({
      name: ['', Validators.required],
      email: ['', Validators.required],
      text: ['', Validators.required]
    });
  }
}
