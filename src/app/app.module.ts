import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'; 

import { AppComponent } from './app.component';
import { HeaderComponent } from './componentes/header/header.component';
import { BodyComponent } from './componentes/body/body.component';
import { FooterComponent } from './componentes/footer/footer.component';
import { AcercaDeComponent } from './componentes/acerca-de/acerca-de.component';
import { APPROUTING } from './app.routes';
import { EmpleadosComponent } from './componentes/empleados/empleados.component';
import { EmpleadosService } from './services/empleados.services';
import { DesEmpleadoComponent } from './componentes/des-empleado/des-empleado.component';
import { FormEmpleadoComponent } from './componentes/form-empleado/form-empleado.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BodyComponent,
    FooterComponent,
    AcercaDeComponent,
    EmpleadosComponent,
    DesEmpleadoComponent,
    FormEmpleadoComponent
  ],
  imports: [
    BrowserModule,
    APPROUTING,
    FormsModule
  ],
  providers: [
    EmpleadosService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
