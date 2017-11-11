import {Component} from '@angular/core';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {

    currentPage:string = 'view-speeches';

    constructor(){

    }

    onViewSpeeches(){

        this.currentPage = 'view-speeches';

    }

    onCreateSpeech(){

        this.currentPage = 'create-speech';

    }

    onSearchSpeeches(){

        this.currentPage = 'search-speech';

    }

}
