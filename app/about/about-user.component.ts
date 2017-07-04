import {Component,OnInit} from '@angular/core';
import {ActivatedRoute,Router} from '@angular/router';
import {User} from '../shared/models/user';




@Component({
    styles:[`
        img{
            max-width:300%;
            margin:20px auto;
        }
    `],
    template:`
    <a (click)="goBack()" class="btn btn-sm btn-info">Go Back</a>
       <div class="jumbotron" *ngIf="user">
        <h1>{{user.username}} {{user.name}}</h1>
        <img [src]="user.avatar" class="img-responsive img-circle">
       </div>
    `   
})
export class AboutUserComponent implements OnInit{
    user:User;
    constructor(
        private route:ActivatedRoute,
        private router:Router  
    ){}
    ngOnInit(){
        this.route.data.forEach((data:{user:User})=>{
            this.user=data.user;
        });
      //grab the current username
    }
    goBack(){
        this.router.navigate(['/about']);
    }
}