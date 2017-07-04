import {Injectable} from '@angular/core';
import {User} from '../models/user';


const usersPromise: Promise<User[]> =Promise.resolve( [
  {
    id: 1,
    name: 'Chris',
    username: 'sevilayha',
    avatar: 'https://pbs.twimg.com/profile_images/502500686588690432/wXBzuCBj_400x400.jpeg'
  },
  {
    id: 2,
    name: 'Nick',
    username: 'whatnicktweets',
    avatar: 'https://pbs.twimg.com/profile_images/502500686588690432/wXBzuCBj_400x400.jpeg'
  },
  {
    id: 3,
    name: 'Holly',
    username: 'hollylawly',
    avatar: 'https://pbs.twimg.com/profile_images/850147482117865472/O28qQSrN_400x400.jpg'
  }
]);

@Injectable()
export class UserService{
    //get all users
    getUsers(){
        return usersPromise;
    }
    getUser(username){
        return usersPromise.then(users=>users.find(user=>user.username===username))
    }
    //find a speicific users
}