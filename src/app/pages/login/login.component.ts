import { Component } from '@angular/core';
import {FormsModule} from '@angular/forms';
import {LoginService} from '../../services/login.service';

@Component({
  selector: 'app-login',
  imports: [
    FormsModule
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})


export class LoginComponent {


  constructor(private loginservice: LoginService) {

  }

callApi() {
    this.loginservice.login(this.user).subscribe({
      next: (json) => {
        if (json.code==200) {
          console.log(json.data);
          alert(json.message)
        }
        else {
          alert(json.message)
        }
      },
      error: (err) => {
        console.log(err);
      }
    })
}


}
