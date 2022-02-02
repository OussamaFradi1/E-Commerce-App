import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { SignupService } from '../services/signup.service';

@Component({
  selector: 'app-signup-client',
  templateUrl: './signup-client.component.html',
  styleUrls: ['./signup-client.component.css']
})
export class SignupClientComponent implements OnInit {
  registerForm: FormGroup;
  submitted = false;
  fileToUpload:Array<File>=[];
  constructor(private formBuilder: FormBuilder,private signup:SignupService,private route:Router) { }

  ngOnInit(): void {
    this.registerForm = this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      username: ['', Validators.required],
      password: ['', Validators.required],
      adress: ['', Validators.required],
      city: ['', Validators.required],
      
  }, {
      
  });
  }
        // convenience getter for easy access to form fields
        get f() { return this.registerForm.controls; }
        handleFileInput(files:any){
          this.fileToUpload=<Array<File>>files.target.files;
          console.log(this.fileToUpload);
        }
  
        onSubmit() {
            this.submitted = true;
            console.log("form validation",this.registerForm.value)
            // stop here if form is invalid
           
            let formdata= new FormData();
            formdata.append("firstName",this.registerForm.value.firstName);
            formdata.append("lastName",this.registerForm.value.lastName);
            formdata.append("username",this.registerForm.value.username);
            formdata.append("password",this.registerForm.value.password);
            formdata.append("adress",this.registerForm.value.adress);
            formdata.append("city",this.registerForm.value.city);
            formdata.append("file",this.fileToUpload[0]);
            //display form values on success
            this.signup.registerClient(formdata).subscribe((res:any)=>{
              console.log(res)
              
            })
  
        }

}
