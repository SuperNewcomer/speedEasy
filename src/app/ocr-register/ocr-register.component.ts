import { Component, OnInit } from '@angular/core';
import { User } from '../models/user';
import { OcrInputService } from '../service/ocr-input.service';

@Component({
  selector: 'app-ocr-register',
  templateUrl: './ocr-register.component.html',
  styleUrls: ['./ocr-register.component.css']
})
export class OcrRegisterComponent implements OnInit {

  newUser: User = new User();
  repassword: String = '';

  onSubmit() {
    if (this.repassword === this.newUser.cpasd) {
      this.ocrInputService.sendUser(this.newUser)
        .subscribe((user: User) => {
            console.log(user);
            this.newUser = new User();
            this.repassword = '';
          }
        );
    } else {
      console.log('密码不一致！');
      this.newUser.cpasd = '';
      this.repassword = '';
    }
  }

  constructor(private ocrInputService: OcrInputService) { }

  ngOnInit() {
  }

}
