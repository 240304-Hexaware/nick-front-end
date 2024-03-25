export class User {
    private _Username: string;
    public get Username(): string {
        return this._Username;
    }
    public set Username(value: string) {
        this._Username = value;
    }
    private _Password: string;
    public get Password(): string {
        return this._Password;
    }
    public set Password(value: string) {
        this._Password = value;
    }
    private _Permissions: string;
    public get Permissions(): string {
        return this._Permissions;
    }
    public set Permissions(value: string) {
        this._Permissions = value;
    }
    private _FilesUploaded: string[];
    public get FilesUploaded(): string[] {
        return this._FilesUploaded;
    }
    public set FilesUploaded(value: string[]) {
        this._FilesUploaded = value;
    }
    private _Specifications: string[];
    public get Specifications(): string[] {
        return this._Specifications;
    }
    public set Specifications(value: string[]) {
        this._Specifications = value;
    }

    constructor(user:string, pass:string, perms:string,files:string[], specs:string[]){
        this._Username =user;
        this._Password = pass;
        this._FilesUploaded = files;
        this._Specifications = specs;
        this._Permissions = perms;
    }



}