/**
* CurrentUserStore.tsx
* Copyright: Microsoft 2018
*
* Singleton store that maintains information about the currently-signed-in user.
*/

import { autoSubscribe, AutoSubscribeStore, StoreBase } from 'resub';

import { User } from '../models/IdentityModels';

@AutoSubscribeStore
export class CurrentUserStore extends StoreBase {
    // TODO - properly initialize
    private _user: User = {
        createdAt: '',
        updatedAt: '',
        emailVerified: false,
        sessionToken: '',
        email: '',
        username: '',
        objectId:'',
        avatar:'',
        ethAddress:''
    };
    setUser(username:string,email:string,createdAt:string,sessionToken:string,updatedAt:string,avatar:string,ethAddress:string) { 
       
        this._user = {
            createdAt,
            updatedAt,
            emailVerified: false,
            sessionToken,
            email,
            username,
            objectId:'',
            avatar ,
            ethAddress,
        };
        console.log(this._user)
        this.trigger();

    }

    @autoSubscribe
    getUser(): User | undefined {
        return this._user;
    }

    private _isLogin: boolean = false
    @autoSubscribe
    getLogin(): boolean {
        return this._isLogin
    }
    setLogin(user: boolean) {
        this._isLogin = user
        this.trigger();

    }
    @autoSubscribe
    getFullName(): string {
        return this._user ? this._user.ethAddress : '';
    }
}

export default new CurrentUserStore();
