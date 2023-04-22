import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/shared/services/auth.service';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent implements OnInit {

  form!: FormGroup;

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.form = this.fb.group({
      email: ["", [Validators.required]],
      password: ["", [Validators.required]],
    })

  }

  signIn() {
    if (this.form.valid) {
      this.authService.signIn(this.form.value).subscribe(x => {
        if (x.message) {
          console.log(x)
          this.router.navigate(['info']);
        }
      });
    }

  }

}
