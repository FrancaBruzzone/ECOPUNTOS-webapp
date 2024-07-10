import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import {
  provideRouter,
  withRouterConfig,
  withEnabledBlockingInitialNavigation,
  withHashLocation,
  withInMemoryScrolling,
  withViewTransitions,
} from '@angular/router';

import { routes } from './app.routes';
import { SidebarModule, DropdownModule } from '@coreui/angular';
import { IconSetService } from '@coreui/icons-angular';
import { provideAnimations } from '@angular/platform-browser/animations';
import { LoginService } from './views/pages/login/login.service';
import { HttpClientModule } from '@angular/common/http';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(
      routes,
      withRouterConfig({
        onSameUrlNavigation: 'reload',
      }),
      withInMemoryScrolling({
        scrollPositionRestoration: 'top',
        anchorScrolling: 'enabled',
      }),
      withEnabledBlockingInitialNavigation(),
      withViewTransitions(),
      withHashLocation(),
    ),
    importProvidersFrom(SidebarModule, DropdownModule, HttpClientModule),
    IconSetService,
    provideAnimations(),
    LoginService,
  ],
};
