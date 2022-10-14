import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    
  }
  statusClass0 = 'active';
  statusClass = 'not-active';
  statusClass1 = 'not-active';
  statusClass2= 'not-active';
  statusClass3 = 'not-active';
  statusClass4 = 'not-active';

  setActiveClass0(){
    this.statusClass0 = 'active';
    this.statusClass = 'not-active';
    this.statusClass1 = 'not-active';
    this.statusClass2= 'not-active';
    this.statusClass3 = 'not-active';
    this.statusClass4 = 'not-active';
  }
  setActiveClass(){
    this.statusClass0 = 'not-active';
    this.statusClass = 'active';
    this.statusClass1 = 'not-active';
    this.statusClass2= 'not-active';
    this.statusClass3 = 'not-active';
    this.statusClass4 = 'not-active';
  }
  setActiveClass1(){
    this.statusClass0 = 'not-active';
    this.statusClass1 = 'active';
    this.statusClass = 'not-active';
    this.statusClass2= 'not-active';
    this.statusClass3 = 'not-active';
    this.statusClass4 = 'not-active';
  }
  setActiveClass2(){
    this.statusClass0 = 'not-active';
    this.statusClass2 = 'active';
    this.statusClass1 = 'not-active';
    this.statusClass = 'not-active';
    this.statusClass3 = 'not-active';
    this.statusClass4 = 'not-active';
  }
  setActiveClass3(){
    this.statusClass0 = 'not-active';
    this.statusClass3 = 'active';
    this.statusClass2 = 'not-active';
    this.statusClass1 = 'not-active';
    this.statusClass = 'not-active';
    this.statusClass4 = 'not-active';
  }
  setActiveClass4(){
    this.statusClass0 = 'not-active';
    this.statusClass4 = 'active';
    this.statusClass3 = 'not-active';
    this.statusClass2 = 'not-active';
    this.statusClass1 = 'not-active';
    this.statusClass = 'not-active';
  }

}
