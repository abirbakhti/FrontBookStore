import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { AuthenticationService } from '../../Service/authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  invalidLogin = false;
  successMessage = "Authentication success";
  errorMessage = "Invalide username or password";
  loginForm: FormGroup;

  constructor(private router: Router, private loginservice: AuthenticationService) { }

  ngOnInit(): void {
    this.loginForm = new FormGroup({
      username: new FormControl(),
      password: new FormControl()
    })
  }

  checkLogin() {
    (this.loginservice.authenticate(this.loginForm.get('username').value, this.loginForm.get('password').value).subscribe(data => {
      this.router.navigate(['/'])
      this.invalidLogin = false
    }, error => {
      this.invalidLogin = true
    }));
  }
}