import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Speech} from "../../../shared/speech";
import {SpeechService} from "../../../shared/speech.service";
import {Router} from "@angular/router";
import {NgbModal} from "@ng-bootstrap/ng-bootstrap";
import {SpeechShareModalComponent} from "../speech-share-modal/speech-share-modal.component";

@Component({
    selector: 'app-speech-form',
    templateUrl: './speech-form.component.html',
    styleUrls: ['./speech-form.component.css']
})
export class SpeechFormComponent implements OnInit {

    @Input() speech: Speech = new Speech();
    @Input() index: number = null;
    @Input() isNew: boolean = false;

    @Output() onDeleteSpeech: EventEmitter<number> = new EventEmitter<number>();
    @Output() onSaved: EventEmitter<Speech> = new EventEmitter<Speech>();

    hasRequiredFields: boolean = true;

    constructor(private speechService: SpeechService,
                private router: Router,
                private modal: NgbModal) {
    }

    ngOnInit() {
    }

    onDelete(): void {

        const index = this.index;

        this.speechService.deleteSpeech(index);

        this.onDeleteSpeech.emit(index);


    }

    onSave(): boolean {

        const speech = this.speech;
        const index = this.index;

        if(!this.validSpeech(speech)){
            this.hasRequiredFields = false;
            return false;
        }

        this.speechService.updateSpeech(speech, index);

        this.onSaved.emit(speech);

    }

    onSubmit(): boolean {

        const speech = this.speech;

        console.log('speech: ', speech);

        if(!this.validSpeech(speech)){
            this.hasRequiredFields = false;
            return false;
        }

        this.speechService.submitSpeech(speech);

        this.router.navigateByUrl('/speeches/0');

    }

    onShare(speech: Speech) {

        const modalRef = this.modal.open(SpeechShareModalComponent);

        modalRef.componentInstance.speech = speech;
        modalRef.result
            .then(
                (results) => {
                    console.log('closed modal results: ', results);
                }
            )
            .catch(
                (error) => console.log('error', error)
            )

    }

    isValidDate(value): boolean {
        if (value) {
            let dateWrapper = new Date(value);
            return !isNaN(dateWrapper.getDate());
        }
        return true;
    }

    validSpeech(speech: Speech): boolean {

        if (speech.title.length <= 0) {
            return false;
        }

        if (speech.text.length <= 0) {
            return false;
        }

        return true;

    }

}
