import {Injectable} from '@angular/core';
import {Http, Response} from "@angular/http";
import {Observable} from "rxjs/Observable";
import {Speech} from "./speech";

@Injectable()
export class SpeechService {

    constructor(private http: Http) {
    }

    getAllSpeeches(): Speech[] {

        let localSpeeches = localStorage.getItem('speeches');

        if(!localSpeeches){
            localSpeeches = "[]";
        }

        return JSON.parse(localSpeeches);
    }

    deleteSpeech(index:number) {

        let speeches = this.getAllSpeeches();

        speeches.splice(index, 1);

        localStorage.setItem('speeches', JSON.stringify(speeches));

    }

    updateSpeech(speech: Speech, index: number) {

        let speeches = this.getAllSpeeches();

        speeches.splice(index, 1, speech);

        localStorage.setItem('speeches', JSON.stringify(speeches));

    }

    submitSpeech(speech: Speech) {

        let speeches = this.getAllSpeeches();

        speeches.unshift(speech);

        localStorage.setItem('speeches', JSON.stringify(speeches));

    }

}
