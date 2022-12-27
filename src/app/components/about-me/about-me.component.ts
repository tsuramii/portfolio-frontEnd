import { Component, OnInit } from '@angular/core';
import { user } from 'src/app/model/user.model';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-about-me',
  templateUrl: './about-me.component.html',
  styleUrls: ['./about-me.component.css']
})
export class AboutMeComponent implements OnInit {

  user: user = new user("", "", "");
  constructor(public userService: UserService) { }

  ngOnInit(): void {
    this.userService.getUser().subscribe(data => { this.user = data })
  }
}
