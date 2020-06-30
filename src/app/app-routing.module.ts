import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FirstComponent } from './first/first.component';
import { ClimaComponent } from './clima/clima.component';
import { ChaufComponent } from './chauf/chauf.component';
import { PlancheComponent } from './planche/planche.component';
import { RadiateurComponent } from './radiateur/radiateur.component';
import { ConsoleComponent } from './console/console.component';
import { CassetteComponent } from './cassette/cassette.component';
import { MuraleComponent } from './murale/murale.component';
import { MobileComponent } from './mobile/mobile.component';
import { PrixclimComponent } from './prixclim/prixclim.component';
import { PrixradComponent } from './prixrad/prixrad.component';
import { PrixplanComponent } from './prixplan/prixplan.component';
import { CustomComponent } from './custom/custom.component';


const routes: Routes = [
  {path:'first',component:FirstComponent},
  {path:'custom',component:CustomComponent},
  {path:'clim',component:ClimaComponent},
  {path:'chauf',component:ChaufComponent},
  {path:'chauf/planche',component:PlancheComponent},
  {path:'chauf/radiateur',component:RadiateurComponent},
  {path:'clim/console',component:ConsoleComponent},
  {path:'clim/cassette',component:CassetteComponent},
  {path:'clim/murale',component:MuraleComponent},
  {path:'clim/mobile',component:MobileComponent},
  {path:'clim/prix',component:PrixclimComponent},
  {path:'chauf/rad/prix',component:PrixradComponent},
  {path:'chauf/plan/prix',component:PrixplanComponent},
  { path: '**', redirectTo: 'first', pathMatch: 'full' },


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
