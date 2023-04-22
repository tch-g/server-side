import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/shared/services/auth.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {

  constructor(private fb: FormBuilder, private authService: AuthService) { }

  form!: FormGroup;

  ngOnInit(): void {
    this.form = this.fb.group({
      firstName: ["", [Validators.required]],
      lastName: ["", [Validators.required]],
      nickName: ["", [Validators.required]],
      email: ["", [Validators.required]],
      password: ["", [Validators.required]],
    })

  }

  register() {
    if (this.form.valid) {
      this.authService.register(this.form.value).subscribe(x => console.log(x));
    }

  }



}
