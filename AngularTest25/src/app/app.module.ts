import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { Screen1Component } from './Component/screen1/screen1.component';
import { Screen2Component } from './Component/screen2/screen2.component';
import { Screen3Component } from './component/screen3/screen3.component';
import { HomeComponent } from './component/home/home.component';
import { DropDownListModule, DropDownsModule } from '@progress/kendo-angular-dropdowns';
import {MatFormFieldModule} from '@angular/material/form-field'
import {
  MatRadioModule,
} from '@angular/material/radio';
import { MatDialogModule } from '@angular/material/dialog';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatTableModule } from '@angular/material/table';
import { NgxYoutubePlayerModule  } from 'ngx-youtube-player';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

@NgModule({
  declarations: [
    AppComponent,
    Screen1Component,
    Screen2Component,
    Screen3Component,
    HomeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    DropDownListModule,
    DropDownsModule,
    MatRadioModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatInputModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatProgressSpinnerModule,
    MatFormFieldModule,
    NgxYoutubePlayerModule.forRoot()

  ],
  providers: [
 ],
  bootstrap: [AppComponent]
})
export class AppModule { }
