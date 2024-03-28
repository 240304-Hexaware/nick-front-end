export class readFile {
    public fileName: string;

    public specId: string;

    public uploadDate: Date;

    public fileSize: number;

    public filePath: string;

    public parsedData: string;

    public uploader: string;

    constructor(name:string, specId:string, date:Date, size:number, path:string, parsed:string, uploader:string){
        this.fileName = name;
        this.specId = specId;
        this.uploadDate = date;
        this.fileSize = size;
        this.filePath = path;
        this.parsedData = parsed;
        this.uploader = uploader;
    }
}