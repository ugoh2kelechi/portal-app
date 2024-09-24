import { FlightModule } from './flight/flight.module';
import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { APP_EXTRA_OPTIONS, APP_ROUTES } from './app.routes';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SidebarComponent } from './sidebar/sidebar.component';

@NgModule({ declarations: [
        AppComponent,
        SidebarComponent,
        NavbarComponent,
        HomeComponent,
    ],
    bootstrap: [AppComponent], imports: [BrowserModule,
        FlightModule,
        RouterModule.forRoot([...APP_ROUTES], { ...APP_EXTRA_OPTIONS })], providers: [provideHttpClient(withInterceptorsFromDi())] })
export class AppModule {
}
