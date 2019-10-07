import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {
  angForm: FormGroup;

  constructor(private st: FormBuilder  ,private router: Router) { 
    this.createForm();
   
  }

  ngOnInit() {
  //   this.loginForm = this.formBuilder.group({
  //     username: ['', Validators.required],
  //     password: ['', Validators.required]
  // });

  }
  createForm() {
    this.angForm = this.st.group({
      email: [''],
      password: ['']
    });
  }
// 
onClickSubmit(formData) {
  // alert('Your Email is : ' + formData.email);
  if (this.angForm.value.email=='sonia'&& this.angForm.value.password=='sonia' ){
  this.router.navigate(['/content']);
  }
else{
  alert('Your Email and Password invalid'); 
}
}
}
