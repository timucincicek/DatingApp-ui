import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../_models/user';
import { AccountService } from '../_services/account.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {
  model: any = {}
  constructor(public accountService: AccountService) { }

  ngOnInit() {

  }

  login() {
    console.log(this.model);
    this.accountService.login(this.model).subscribe((result: any) => { },
     error => {
      console.log(error);
    });
  }

  logout() {
    this.accountService.logout();
  }
}
