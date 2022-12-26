import { Component, OnInit } from '@angular/core';
import { user } from 'src/app/model/user.model';
import { UserService } from 'src/app/services/user.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  user: user = new user("","","");
  constructor(public userService: UserService) { }

  ngOnInit(): void {
  this.userService.getUser().subscribe(data => {this.user = data})
  }

}
