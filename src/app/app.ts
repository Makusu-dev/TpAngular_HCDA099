import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import translationsEN from '../assets/i18n/en.json';
import translationsFR from '../assets/i18n/fr.json';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {

  constructor(private translate: TranslateService) {
    this.translate.addLangs(['fr', 'en']);
    this.translate.setDefaultLang('en');
    this.translate.use('en');
    this.translate.setTranslation('en', translationsEN);
    this.translate.setTranslation('fr', translationsFR);
  }

  protected readonly title = signal('tp-movie-list');
}



