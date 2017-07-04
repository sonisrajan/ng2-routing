import {Injectable} from '@angular/core';
import {Router,ActivatedRouteSnapshot,Resolve} from '@angular/router';
import {User} from  '../shared/models/user';
import {UserService} from  '../shared/services/user.service';

@Injectable()
export class AboutUserResolve implements Resolve<User>{
    constructor(private router:Router,private service:UserService){}

    resolve(route:ActivatedRouteSnapshot){
        let username=route.params['username'];
        return this.service.getUser(username).then(user=>{
                if(user)
                    return user;
                else
                    //navigate user tback to the about page
                    this.router.navigate(['/about']);
                    return false;
        })  ; 
    }
}