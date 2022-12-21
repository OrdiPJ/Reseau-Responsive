import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-register-page',
  templateUrl: './register-page.component.html',
  styleUrls: ['./register-page.component.css']
})
export class RegisterPageComponent {
  registerForm = new FormGroup({
    name: new FormControl(''),
    fName: new FormControl(''),
    pseudo: new FormControl(''),
    email: new FormControl(''),
    password: new FormControl(''),
    cPassword: new FormControl(''),
    cgu: new FormControl(''),
  });

  ngOnInit() {
    console.log("On load call");
    
    const forms: NodeListOf<HTMLFormElement> = document.querySelectorAll('.needs-validation')

    // Loop over them and prevent submission
    Array.from(forms).forEach(form => {
      form.addEventListener('submit', event => {
        if (!form.checkValidity()) {
          event.preventDefault()
          event.stopPropagation()
        }

        form.classList.add('was-validated')
      }, false)
    })
  }

  onSubmit() {
    if(this.registerForm.status === 'VALID') {
      console.warn(this.registerForm.value);
    }
    // console.warn(this.registerForm.value);
  }
}
