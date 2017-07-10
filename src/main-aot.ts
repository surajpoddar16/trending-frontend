// Main entry file for Ahead of Time compilation of application.
// Bootstraps the AOT compiled AppModule in browser.
import { platformBrowser }    from '@angular/platform-browser';
import { AppModuleNgFactory } from '../aot/src/app/app.module.ngfactory';
platformBrowser().bootstrapModuleFactory(AppModuleNgFactory);
