export default interface IUserInfo {
    _id: string;
    account: string;
    name: string;
    loginCode: number;
    password: string;
    address:string;
    email:string;
}
export class UserInfo {
    _id: string;
    account: string;
    name: string;
    loginCode: number;
    password: string;
    address:string;
    email:string;
    constructor(args?: any) {
        if (!args) {
            args = {};
        }
        this._id = args._id ?? undefined;
        this.account = args.account ?? "";
        this.name = args.name ?? "";
        this.loginCode = args.loginCode ?? -1;
        this.password = args.password ?? "";
        this.address = args.address ?? "";
        this.email = args.email ?? "";
    }
    
}