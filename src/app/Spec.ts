import ObjectID from "bson-objectid";

export class Spec {
    public originalJson: string;

    public filePath: string;

    public specName: string;

    
    public id: ObjectID;


    constructor(json:string, path:string, name:string, id:ObjectID){
        this.originalJson = json;
        this.filePath = path;
        this.specName = name;
        this.id = id;
    }


}