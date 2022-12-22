import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-menu-nav',
  templateUrl: './menu-nav.component.html',
  styleUrls: ['./menu-nav.component.css']
})
export class MenuNavComponent {
  // ngOnInit() {
  //   console.log("ngOnInit()");
    
  //   const forms: NodeListOf<HTMLFormElement> = document.querySelectorAll('.needs-validation')

  //   Array.from(forms).forEach(form => {
  //     form.addEventListener('submit', event => {
  //       if (!form.checkValidity()) {
  //         event.preventDefault()
  //         event.stopPropagation()
  //       }

  //       form.classList.add('was-validated')
  //     }, false)
  //   })
  // }

  loginForm = new FormGroup({
    username: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required),
  });

  get username() { return this.loginForm.get('username'); }
  get password() { return this.loginForm.get('password'); }

  onSubmit() {
    console.warn(this.loginForm.status);    
  }
}
