import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { MessageService } from './services/message.service';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material.module';
import { MatCarouselModule } from '@ngmodule/material-carousel';

import { MainNavComponent } from './main-nav/main-nav.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule, MatButtonModule, MatSidenavModule, MatIconModule, MatListModule } from '@angular/material';
import { InicioComponent } from './pages/inicio/inicio.component';
import { HabMatrimonialComponent } from './pages/hostal/hab-matrimonial/hab-matrimonial.component';
import { HabDobleComponent } from './pages/hostal/hab-doble/hab-doble.component';
import { HabTripleComponent } from './pages/hostal/hab-triple/hab-triple.component';
import { TerceraEdadComponent } from './pages/tercera-edad/tercera-edad.component';
import { ExtranjeroComponent } from './pages/extranjero/extranjero.component';
import { CabanaComponent } from './pages/cabana/cabana.component';
import { CafeteriaComponent } from './pages/cafeteria/cafeteria.component';
import { HostalInicioComponent } from './pages/hostal/hostal-inicio/hostal-inicio.component';
import { ContactoComponent } from './pages/contacto/contacto.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DepartamentoComponent } from './pages/departamento/departamento.component';
import { TarifaComponent } from './pages/tarifa/tarifa.component';


@NgModule({
  declarations: [
    AppComponent,
    MainNavComponent,
    InicioComponent,
    HabMatrimonialComponent,
    HabDobleComponent,
    HabTripleComponent,
    TerceraEdadComponent,
    ExtranjeroComponent,
    CabanaComponent,
    CafeteriaComponent,
    HostalInicioComponent,
    ContactoComponent,
    DepartamentoComponent,
    TarifaComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    LayoutModule,
    MaterialModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatCarouselModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [MessageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
