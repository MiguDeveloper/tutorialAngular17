import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppStandaloneComponent } from './app/app-standalone.component';

bootstrapApplication(AppStandaloneComponent, appConfig).catch((err) =>
  console.error(err),
);

//#region INICIAR APLICACION ENFOQUE MODULOS
// import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
// import { AppModule } from './app/app.module';

// platformBrowserDynamic()
//   .bootstrapModule(AppModule)
//   .catch((err) => console.error(err));
//#endregion
