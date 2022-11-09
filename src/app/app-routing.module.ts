import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { AnonymousLayoutComponent } from './components/anonymous-layout.components';
import { AuthenLayoutComponent } from './components/authen-layout.components';
import { PowerQualityComponent } from './components/power-quality/power-quality.component';
import { AllMeterComponent } from './components/all-meter/all-meter.component';
import { ExploreComponent } from './components/explore/explore.component';
import { LoginComponent } from './components/login/login.component';
import { AuthGuard } from './services/auth.guard';

const tamp = true;

const routes: Routes = [
  {
    path: '',
    component: AuthenLayoutComponent,
    canActivate: [AuthGuard],
    children: [
      { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
      { path: 'dashboard', component: DashboardComponent},
      { path: 'power-quality', component: PowerQualityComponent},
      { path: 'all-meter', component: AllMeterComponent },
      { path: 'explore', component: ExploreComponent },

    ],
  },
  {
    // hide menu & sidenev
    path: '',
    component: AnonymousLayoutComponent,
    children: [
      { path: 'login', component: LoginComponent },
      // { path: 'register', component: RegisterComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
