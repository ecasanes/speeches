interface BootstrapDate {
    day?: number,
    month?: number,
    year?: number
}

export class Speech {

    constructor(){
        this.title = '';
        this.text = '';
        this.author = '';
        this.keywords = '';
        this.date = '';
    }

    index?: number;
    isMatch?:boolean = false;
    title: string;
    text: string;
    author: string;
    keywords: string;
    date: BootstrapDate;

}
