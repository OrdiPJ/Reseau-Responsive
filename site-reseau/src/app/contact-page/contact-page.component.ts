import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact-page',
  templateUrl: './contact-page.component.html',
  styleUrls: ['./contact-page.component.css']
})
export class ContactPageComponent {
	contactForm = new FormGroup({
		email: new FormControl('', [Validators.required, Validators.email]),
		msg: new FormControl('', Validators.required),
	});

	get email() { return this.contactForm.get('email'); }
	get msg() { return this.contactForm.get('msg'); }

	onSubmit() {
		
	}
	
}
