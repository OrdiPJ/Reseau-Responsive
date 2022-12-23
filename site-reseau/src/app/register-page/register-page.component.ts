import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-register-page',
  templateUrl: './register-page.component.html',
  styleUrls: ['./register-page.component.css']
})
export class RegisterPageComponent {
  registerForm = new FormGroup({
    name: new FormControl('', Validators.required),
    fName: new FormControl('', Validators.required),
    pseudo: new FormControl('', [Validators.required, Validators.minLength(3)]),
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required, Validators.minLength(8)]),
    cPassword: new FormControl('', Validators.required),
    cgu: new FormControl('', Validators.required),
  });

  get name() { return this.registerForm.get('name'); }
  get fName() { return this.registerForm.get('fName'); }
  get pseudo() { return this.registerForm.get('pseudo'); }
  get email() { return this.registerForm.get('email'); }
  get password() { return this.registerForm.get('password'); }
  get cPassword() { return this.registerForm.get('cPassword'); }
  get cgu() { return this.registerForm.get('cgu'); }

  onSubmit() { }
}

