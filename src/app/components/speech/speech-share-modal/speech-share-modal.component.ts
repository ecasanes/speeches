import {Component, Input, OnInit} from '@angular/core';
import {NgbActiveModal} from "@ng-bootstrap/ng-bootstrap";
import {Speech} from "../../../shared/speech";

declare let emailjs:any;

@Component({
    selector: 'app-speech-share-modal',
    templateUrl: './speech-share-modal.component.html',
    styleUrls: ['./speech-share-modal.component.css']
})
export class SpeechShareModalComponent implements OnInit {

    @Input() speech: Speech = new Speech();

    email: string = "";

    constructor(private activeModal: NgbActiveModal) {
    }

    ngOnInit() {
    }

    onDismiss() {
        this.activeModal.close();
    }

    onSend(speech: Speech) {

        console.log('speech: ', speech);

        emailjs.send("gmail","template_Rpu6x7pY", speech);

        this.activeModal.close();
    }

}
