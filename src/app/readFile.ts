export class readFile {
    private fileName: string;
    public get _fileName(): string {
        return this.fileName;
    }
    public set _fileName(value: string) {
        this.fileName = value;
    }
    private specName: string;
    public get specId(): string {
        return this.specName;
    }
    public set specId(value: string) {
        this.specName = value;
    }
    private uploadDate: Date;
    public get _uploadDate(): Date {
        return this.uploadDate;
    }
    public set _uploadDate(value: Date) {
        this.uploadDate = value;
    }
    private fileSize: number;
    public get _fileSize(): number {
        return this.fileSize;
    }
    public set _fileSize(value: number) {
        this.fileSize = value;
    }
    private filePath: string;
    public get _filePath(): string {
        return this.filePath;
    }
    public set _filePath(value: string) {
        this.filePath = value;
    }
    private parsedData: string;
    public get _parsedData(): string {
        return this.parsedData;
    }
    public set _parsedData(value: string) {
        this.parsedData = value;
    }
    private uploader: string;
    public get _uploader(): string {
        return this.uploader;
    }
    public set _uploader(value: string) {
        this.uploader = value;
    }

    constructor(name:string, specId:string, date:Date, size:number, path:string, parsed:string, uploader:string){
        this.fileName = name;
        this.specName = specId;
        this.uploadDate = date;
        this.fileSize = size;
        this.filePath = path;
        this.parsedData = parsed;
        this.uploader = uploader;
    }
}