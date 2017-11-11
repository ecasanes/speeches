import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {SpeechService} from './shared/speech.service';

import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import {FormsModule} from "@angular/forms";
import {HttpModule} from "@angular/http";

import {RouterModule} from "@angular/router";
import { APP_ROUTES } from './app.routing';

import { SpeechFormComponent } from './components/speech/speech-form/speech-form.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { SpeechNewComponent } from './components/speech/speech-new/speech-new.component';
import { SpeechSearchComponent } from './components/speech/speech-search/speech-search.component';
import {SpeechListComponent} from "./components/speech/speech-list/speech-list.component";
import { SpeechShareModalComponent } from './components/speech/speech-share-modal/speech-share-modal.component';

@NgModule({
    declarations: [
        AppComponent,
        SpeechFormComponent,
        NavigationComponent,
        SpeechListComponent,
        SpeechNewComponent,
        SpeechSearchComponent,
        SpeechShareModalComponent
    ],
    imports: [
        RouterModule.forRoot(APP_ROUTES, {useHash: false}),
        BrowserModule,
        FormsModule,
        HttpModule,
        NgbModule.forRoot()
    ],
    providers: [
        SpeechService
    ],
    bootstrap: [AppComponent],
    entryComponents: [
        SpeechShareModalComponent
    ]
})
export class AppModule {
}
