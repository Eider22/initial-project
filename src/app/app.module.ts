import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormularioComponent } from './formulario/formulario.component';
import { EncabezadoComponent } from './encabezado/encabezado.component';
import { FooterComponent } from './footer/footer.component';
import { CuerpoComponent } from './cuerpo/cuerpo.component';
import { FormsModule } from '@angular/forms';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { ModalComponent } from './modal/modal.component';
import { RegisterFormComponent } from './register-form/register-form.component';
import { TableComponent } from './table/table.component';
import { StudentPageComponent } from './pages/student-page/student-page.component';

@NgModule({
  declarations: [
    AppComponent,
    FormularioComponent,
    EncabezadoComponent,
    FooterComponent,
    CuerpoComponent,
    ModalComponent,
    RegisterFormComponent,
    TableComponent,
    StudentPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    NgxDatatableModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
