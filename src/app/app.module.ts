import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { AnonymousLayoutComponent } from './components/anonymous-layout.components';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxEchartsModule } from 'ngx-echarts';
import { DatePipe } from '@angular/common';

// material
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatDialogModule } from '@angular/material/dialog';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatMenuModule } from '@angular/material/menu';
import { MatTableModule } from '@angular/material/table'
import { MatExpansionModule } from '@angular/material/expansion';
import { MatNativeDateModule } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatSelectModule } from '@angular/material/select';
import { MatTabsModule } from '@angular/material/tabs';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatTreeModule } from '@angular/material/tree';
import { MatCheckboxModule } from '@angular/material/checkbox';

import { DashboardHeaderComponent } from './components/dashboard-header/dashboard-header.component';
import { AuthenLayoutComponent } from './components/authen-layout.components';
import { I18nModule } from './i18n/i18n.module';
import { MenuComponent } from './components/menu/menu.component';
import { AvatarPhotoComponent } from './components/menu/avatar-photo/avatar-photo.component';
import { NgCircleProgressModule } from 'ng-circle-progress';
import { PowerQualityComponent } from './components/power-quality/power-quality.component';
import { PowerQualitySelectMdbComponent } from './components/power-quality-select-mdb/power-quality-select-mdb.component';
import { HeaderComponent } from './components/header/header.component';
import { AllMeterComponent } from './components/all-meter/all-meter.component';
import { ExploreComponent } from './components/explore/explore.component';
import { ExploreGraphAComponent } from './components/explore-graph-a/explore-graph-a.component';
import { ExploreGraphBComponent } from './components/explore-graph-b/explore-graph-b.component';
import { ExploreGraphCComponent } from './components/explore-graph-c/explore-graph-c.component';
import { ExploreGraphDComponent } from './components/explore-graph-d/explore-graph-d.component';
import { LoginComponent } from './components/login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    DashboardHeaderComponent,
    AnonymousLayoutComponent,
    AuthenLayoutComponent,
    AvatarPhotoComponent,
    MenuComponent,
    PowerQualityComponent,
    PowerQualitySelectMdbComponent,
    HeaderComponent,
    AllMeterComponent,
    ExploreComponent,
    ExploreGraphAComponent,
    ExploreGraphBComponent,
    ExploreGraphCComponent,
    ExploreGraphDComponent,
    LoginComponent,
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    I18nModule,
    FormsModule,
    ReactiveFormsModule,
    NgxEchartsModule.forRoot({
      echarts: () => import('echarts'),
    }),
    NgCircleProgressModule.forRoot({
      "space": -10,
      "outerStrokeWidth": 10,
      "outerStrokeColor": "#4882c2",
      "outerStrokeGradientStopColor": "#53a9ff",
      "innerStrokeColor": "lightgray",
      "innerStrokeWidth": 10,
      "animateTitle": false,
      "animationDuration": 1000,
      "showUnits": true,
      "showBackground": false,
      "clockwise": false,
      "startFromZero": false,
      "lazy": true
    }),

    // material
    MatCardModule,
    MatFormFieldModule,
    MatIconModule,
    MatDialogModule,
    MatInputModule,
    MatButtonModule,
    MatSelectModule,
    MatDividerModule,
    MatSidenavModule,
    MatListModule,
    MatMenuModule,
    MatTableModule,
    MatExpansionModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatTabsModule,
    MatProgressBarModule,
    MatProgressSpinnerModule,
    MatTreeModule,
    MatCheckboxModule
  ],
  providers: [DatePipe,],
  bootstrap: [AppComponent]
})
export class AppModule { }
