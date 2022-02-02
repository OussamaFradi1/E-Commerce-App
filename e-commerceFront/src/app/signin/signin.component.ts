import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { SigninService } from '../services/signin.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {
  registerForm: FormGroup;
  submitted = false;
  constructor(private formBuilder: FormBuilder,private signin:SigninService,private route:Router) { }

  ngOnInit(): void {
    this.registerForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
      
  }, {
      
  });
  }
    // convenience getter for easy access to form fields
    get f() { return this.registerForm.controls; }

    onSubmit() {
        this.submitted = true;
  
        // stop here if form is invalid
      
  
        this.signin.loginUser(this.registerForm.value).subscribe((res:any)=>{
          localStorage.setItem('userconnect',JSON.stringify(res.user))
          localStorage.setItem("state","0")
          this.route.navigateByUrl('/home')
          // Swal.fire('user login!')
        console.log("user login",this.registerForm.value)
        });
    }
  
    onReset() {
        this.submitted = false;
        this.registerForm.reset();
    }


}
