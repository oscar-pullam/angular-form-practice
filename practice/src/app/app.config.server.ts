import { mergeApplicationConfig, ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideServerRendering, withRoutes } from '@angular/ssr';
import { appConfig } from './app.config';
import { serverRoutes } from './app.routes.server';
import {provideLuxonDateAdapter} from '@angular/material-luxon-adapter';

const serverConfig: ApplicationConfig = {
  providers: [
    provideServerRendering(withRoutes(serverRoutes)),
    provideLuxonDateAdapter()
  ]
};

export const config = mergeApplicationConfig(appConfig, serverConfig);
