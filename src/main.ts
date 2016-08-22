import { bootstrap } from '@angular/platform-browser-dynamic';
import { enableProdMode } from '@angular/core';
import { AppComponent, environment } from './app/';
import { PostDataService } from './app/services/post-data.service'

if (environment.production) {
  enableProdMode();
}

bootstrap(AppComponent, [PostDataService]);
