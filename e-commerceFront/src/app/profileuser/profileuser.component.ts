import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profileuser',
  templateUrl: './profileuser.component.html',
  styleUrls: ['./profileuser.component.css']
})
export class ProfileuserComponent implements OnInit {
  userconnect=JSON.parse(localStorage.getItem("userconnect")!)

  constructor() { }

  ngOnInit(): void {
  }

}
