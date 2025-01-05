import { Component, OnInit } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { AuthService } from '../services/auth.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  email: any;
  password: any;

  constructor(
    private authService: AuthService,
    private spinner: NgxSpinnerService,
    private toastr: ToastrService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  login() {
    this.spinner.show();
    if (!this.email || !this.password) {
      this.toastr.error('All fields are required.', 'Error');
      this.spinner.hide();
    }
    else {
      let dataToSend = {
        email: this.email,
        password: this.password
      }
      this.authService.login(dataToSend).then((res: any) => {
        console.log("login res________________", res);
        if (res['status'] == 200) {
          if (res['data']['role'] == 'admin') {
            this.toastr.success('Successfully Logged In', 'Success');

            this.router.navigate(['/dashboard']);
          } else {
            this.toastr.error("Authorization error", 'Error');
            this.spinner.hide();
          }
          this.authService.storeUserData(res['data']['accessToken']);
          if (res['data']['firstName'] && res['data']['lastName']) {
            let userName = res['data']['firstName'].charAt(0).toUpperCase() + res['data']['firstName'].slice(1) +
              " " + res['data']['lastName'].charAt(0).toUpperCase() + res['data']['lastName'].slice(1);
            localStorage.setItem("userName", userName);
          }


        } else {
          this.toastr.error(res['message'], 'Error');
        }
        this.spinner.hide();
      });
    }
  }

}
