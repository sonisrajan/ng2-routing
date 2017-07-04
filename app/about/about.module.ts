import {NgModule} from '@angular/core';
import {AboutComponent} from './about.component';
import {AboutUserComponent} from './about-user.component';
import {AboutSectionComponent} from './about-section.component';
import {UserService} from '../shared/services/user.service';
import {CommonModule} from '@angular/common';
import {aboutRouting} from './about.routing';
import {AboutUsersResolve} from './about-resolve.service';
import {AboutUserResolve} from './about-user-resolve.service';

@NgModule({
    imports:[
        CommonModule,
        aboutRouting
    ],
    declarations:[
        AboutComponent,
        AboutUserComponent,
        AboutSectionComponent
    ],
    providers:[
        UserService,
        AboutUsersResolve,
        AboutUserResolve
    ]
})
export class AboutModule{}