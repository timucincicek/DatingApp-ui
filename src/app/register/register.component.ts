import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { User } from '../_models/user';
import { AccountService } from '../_services/account.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  @Output() cancelRegister = new EventEmitter<boolean>();

  model: any = {}

  constructor(private accountService: AccountService) { }

  ngOnInit() {
  }

  register() {
    this.accountService.register(this.model).subscribe(response=>{
      this.cancel();
    },error=>{
      
    });
  }
  cancel() {
    this.cancelRegister.emit(false);
  }

}
