import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import Swal from 'sweetalert2';
import { CategoryService } from '../services/category.service';

@Component({
  selector: 'app-add-category',
  templateUrl: './add-category.component.html',
  styleUrls: ['./add-category.component.css']
})
export class AddCategoryComponent implements OnInit {
  registerForm: FormGroup;
  submitted = false;
  constructor(private formBuilder: FormBuilder,private category:CategoryService) { }

  ngOnInit(): void {
    this.registerForm = this.formBuilder.group({
      id: ['', Validators.required],
      title: ['', Validators.required],
      description: ['', Validators.required],
      
  },);
  }
  onSubmit() {
    this.submitted = true;

    // stop here if form is invalid
  

    this.category.addCategory(this.registerForm.value).subscribe((res:any)=>{
      Swal.fire('Category Added!')
    console.log("form Category",this.registerForm.value)
    });
}
onReset() {
  this.submitted = false;
  this.registerForm.reset();
}

}
