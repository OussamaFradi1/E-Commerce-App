import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  userconnect=JSON.parse(localStorage.getItem("userconnect")!)
  constructor() { }

  ngOnInit(): void {
  }
  logout(){
    localStorage.clear()
  }

}
