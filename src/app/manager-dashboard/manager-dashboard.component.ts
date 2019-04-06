import { Component, OnInit } from '@angular/core';
import { UserDetails } from '../domain/userDetail';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-manager-dashboard',
  templateUrl: './manager-dashboard.component.html',
  styleUrls: ['./manager-dashboard.component.css']
})
export class ManagerDashboardComponent implements OnInit {
  pageTitle=" Manager Dashboard"
  user: UserDetails;
  empId:number;
  constructor(private router:Router,private route: ActivatedRoute) { }

  ngOnInit() {
  }
  approvaDney(){
    this.router.navigateByUrl('/approve-deny');
   }
}
