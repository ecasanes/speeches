import {Component, OnInit} from '@angular/core';
import {Speech} from "../../../shared/speech";
import {SpeechService} from "../../../shared/speech.service";
import {Router} from "@angular/router";

@Component({
    selector: 'app-speech-search',
    templateUrl: './speech-search.component.html',
    styleUrls: ['./speech-search.component.css']
})
export class SpeechSearchComponent implements OnInit {

    searchKey: string = "";
    speeches: Speech[] = [];
    searchResults: Speech[] = [];

    constructor(private speechService: SpeechService, private router: Router) {
        this.getAllSpeeches();
    }

    ngOnInit() {
    }

    getAllSpeeches() {
        this.speeches = this.speechService.getAllSpeeches();
    }

    onSearch() {

        this.searchResults = [];
        const searchKey = this.searchKey;

        console.log('searchKey: ', searchKey);
        console.log('speeches: ', this.speeches);

        this.speeches.forEach(
            (item, index) => {

                const isMatch: boolean = Object.keys(item).some(
                    property => {

                        const value = ''+item[property];

                        if (typeof value == 'undefined' || value == null || value == '') {
                            return false;
                        }

                        return item[property] !== null && (value.toLowerCase() === searchKey.toLowerCase())
                    }
                );

                item.index = index;

                if (isMatch) {
                    item.isMatch = true;
                }

                this.searchResults.push(item);

            }
        );

        console.log('search results: ', this.searchResults);

    }

    onEdit(index: number) {

        this.router.navigateByUrl('/speeches/'+index);

    }

}
