import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import { User } from 'firebase';
import { Observable } from 'rxjs/Observable';
import { map } from 'rxjs/operators/map';
import * as firebase from 'firebase/app';


@Injectable()
export class AuthService {

  public user: User;

  constructor(private afAuth: AngularFireAuth) {
    afAuth.authState.subscribe((user: firebase.User) => {
      this.user = user;
    }, (err) => {
      this.user = null;
    });
  }

  login(email: string, password: string) : Promise<User | null> {
    return this.afAuth.auth.signInWithEmailAndPassword(email, password);
  }

  register(email: string, password: string): Promise<User | null> {
    return this.afAuth.auth.createUserWithEmailAndPassword(email, password);
  }

  logout(): Promise<any> {
    return this.afAuth.auth.signOut();
  }

}
