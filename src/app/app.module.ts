import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {DragDropModule} from '@angular/cdk/drag-drop';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FirstComponent } from './first/first.component';
import { ClimaComponent } from './clima/clima.component';
import { ChaufComponent } from './chauf/chauf.component';
import { PlancheComponent } from './planche/planche.component';
import { RadiateurComponent } from './radiateur/radiateur.component';
import { CassetteComponent } from './cassette/cassette.component';
import { ConsoleComponent } from './console/console.component';
import { MuraleComponent } from './murale/murale.component';
import { MobileComponent } from './mobile/mobile.component';
import { PrixclimComponent } from './prixclim/prixclim.component';
import { PrixradComponent } from './prixrad/prixrad.component';
import { PrixplanComponent } from './prixplan/prixplan.component';
import { CustomComponent } from './custom/custom.component';

@NgModule({
  declarations: [

    AppComponent,
    FirstComponent,
    ClimaComponent,
    ChaufComponent,
    PlancheComponent,
    RadiateurComponent,
    CassetteComponent,
    ConsoleComponent,
    MuraleComponent,
    MobileComponent,
    PrixclimComponent,
    PrixradComponent,
    PrixplanComponent,
    CustomComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    DragDropModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
