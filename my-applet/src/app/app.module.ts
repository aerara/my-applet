import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AppletComponent } from './applet/applet.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ManualComponent } from './manual/manual';
import { ParentComponent } from './parent/parent.component';
import { ChildComponent } from './child/child.component';
import { InputEnrollmentComponent } from './input-enrollment/input-enrollment.component';
import { OutputEnrollmentComponent } from './output-enrollment/output-enrollment.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';
import { TemplateFormComponent } from './template-form/template-form.component';

@NgModule({
  declarations: [
    AppComponent,
    AppletComponent,
    DashboardComponent,
    ManualComponent,
    ParentComponent,
    ChildComponent,
    InputEnrollmentComponent,
    OutputEnrollmentComponent,
    ReactiveFormComponent,
    TemplateFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }