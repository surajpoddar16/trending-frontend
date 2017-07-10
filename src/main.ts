// Just in Time compilation of application.
// Bootstraps the compiled AppModule in browser.
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { enableProdMode } from '@angular/core';
import { AppModule } from './app/app.module';
if (process.env.ENV === 'production') {
  enableProdMode();
}
platformBrowserDynamic().bootstrapModule(AppModule);
