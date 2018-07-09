import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  checked = false;
  @Output() terms = new EventEmitter<boolean>();
  constructor() { }

  ngOnInit() {
  }

  onSwitch(tou: boolean){
    this.terms.emit(tou)
  }

}
