import ObjectID from "bson-objectid";

export class User {
    public username: string;
 
    public password: string;

    public permissions: string;
 
    public filesUploaded: ObjectID[];

    public specifications: ObjectID[];

    constructor(user:string, pass:string, perms:string,files:ObjectID[], specs:ObjectID[]){
        this.username =user;
        this.password = pass;
        this.filesUploaded = files;
        this.specifications = specs;
        this.permissions = perms;
    }



}