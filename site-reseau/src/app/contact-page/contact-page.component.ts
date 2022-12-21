import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact-page',
  templateUrl: './contact-page.component.html',
  styleUrls: ['./contact-page.component.css']
})
export class ContactPageComponent implements OnInit {
	contactForm!: FormGroup;

	ngOnInit(): void {
		this.contactForm = new FormGroup({
			email: new FormControl('', [
				Validators.required,
				Validators.email
			]),
			msg: new FormControl('', [Validators.required])
		});
	}
	// contactForm = this.fb.group({
	// 	email: ['', [Validators.required, Validators.email]],
	// 	msg: ['']
	// })
	// contactForm = new FormGroup({
	// 	email: new FormControl('', [
	// 		Validators.required,
	// 	]),
	// 	msg: new FormControl('')
	// });
	
	onSubmit() {
		const forms: NodeListOf<HTMLFormElement> = document.querySelectorAll('.needs-validation')
		Array.from(forms).forEach(form => {
			form.addEventListener('submit', event => {
				if (!form.checkValidity()) {
					event.preventDefault()
					event.stopPropagation()
				}

				form.classList.add('was-validated')
			}, false)
		});
	}
	
}
