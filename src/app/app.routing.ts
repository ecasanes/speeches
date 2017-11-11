
import {SpeechListComponent} from "./components/speech/speech-list/speech-list.component";
import {SpeechNewComponent} from "./components/speech/speech-new/speech-new.component";
import {SpeechSearchComponent} from "./components/speech/speech-search/speech-search.component";


export const APP_ROUTES = [

    {path: 'speeches', component: SpeechListComponent},
    {path: 'speeches/:index', component: SpeechListComponent},
    {path: 'new', component: SpeechNewComponent},
    {path: 'search', component: SpeechSearchComponent},
    { path: '', component: SpeechListComponent }

];