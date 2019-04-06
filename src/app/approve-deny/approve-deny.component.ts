import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-approve-deny',
  templateUrl: './approve-deny.component.html',
  styleUrls: ['./approve-deny.component.css']
})
export class ApproveDenyComponent implements OnInit {
  pageTitle="Approve Deny the Leave !!"

  empId:number;

  ngOnInit() {
  }
  constructor(private router:Router,private route: ActivatedRoute,) {
    this.empId = +this.route.snapshot.paramMap.get("username")
   
   } 
   approvedeny(){
    this.router.navigate(['/approve-deny',this.empId])
   }
}
