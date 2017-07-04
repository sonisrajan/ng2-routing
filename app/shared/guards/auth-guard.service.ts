import { Injectable } from '@angular/core';
import {CanActivate,CanActivateChild} from '@angular/router';

@Injectable()
export class AuthGuard implements CanActivate,CanActivateChild{
    canActivate(){
        console.log("i am checking to see iof ou are logged in ");
        return true;
    }
    canActivateChild(){
        console.log("checking router access ");
        return true;
    }
    constructor() { }
}