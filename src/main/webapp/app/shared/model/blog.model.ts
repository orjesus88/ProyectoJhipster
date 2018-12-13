import { IUser } from 'app/core/user/user.model';

export interface IBlog {
    id?: number;
    name?: string;
    handle?: string;
    description?: any;
    user?: IUser;
}

export class Blog implements IBlog {
    constructor(public id?: number, public name?: string, public handle?: string, public description?: any, public user?: IUser) {}
}
