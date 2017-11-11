import {Component, OnDestroy, OnInit} from '@angular/core';
import {SpeechService} from "../../../shared/speech.service";
import {Speech} from "../../../shared/speech";
import {ActivatedRoute} from "@angular/router";

@Component({
    selector: 'app-speech-list',
    templateUrl: './speech-list.component.html',
    styleUrls: ['./speech-list.component.css']
})
export class SpeechListComponent implements OnInit, OnDestroy {

    speeches: Speech[] = [];
    currentSpeech: Speech = new Speech();
    currentSpeechIndex: number;

    private routeSub: any;

    constructor(private speechService: SpeechService, private route: ActivatedRoute) {

        this.getAllSpeeches();

    }

    ngOnInit() {
        this.routeSub = this.route.params.subscribe(params => {
            this.viewSpeechByIndex(+params['index']);
        });
    }

    ngOnDestroy() {
        this.routeSub.unsubscribe();
    }

    getAllSpeeches() {

        this.speeches = this.speechService.getAllSpeeches();

    }

    onViewSpeech(speech: Speech, index: number) {

        const editedSpeech = new Speech();

        editedSpeech.title = speech.title;
        editedSpeech.text = speech.text;
        editedSpeech.author = speech.author;
        editedSpeech.keywords = speech.keywords;
        editedSpeech.date = speech.date;

        this.currentSpeech = editedSpeech;
        this.currentSpeechIndex = index;

    }

    viewSpeechByIndex(index: number) {

        const speech = this.speeches[index];

        const editedSpeech = new Speech();

        if(typeof speech !== 'undefined'){
            editedSpeech.title = speech.title;
            editedSpeech.text = speech.text;
            editedSpeech.author = speech.author;
            editedSpeech.keywords = speech.keywords;
            editedSpeech.date = speech.date;
        }

        this.currentSpeech = editedSpeech;
        this.currentSpeechIndex = index;

    }

    deleteSpeech(index: number) {

        this.speeches.splice(index, 1);

    }

    updateSpeech(speech: Speech) {

        const index = this.currentSpeechIndex;

        this.speeches[index].title = speech.title;
    }

}
