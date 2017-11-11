import { Component, OnInit } from '@angular/core';
import {Speech} from "../../../shared/speech";

@Component({
  selector: 'app-speech-new',
  templateUrl: './speech-new.component.html',
  styleUrls: ['./speech-new.component.css']
})
export class SpeechNewComponent implements OnInit {

  newSpeech: Speech = new Speech();

  constructor() { }

  ngOnInit() {
  }

}
