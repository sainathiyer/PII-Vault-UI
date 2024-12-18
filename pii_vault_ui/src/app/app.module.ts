import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [AppComponent], // Add your components here
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot([]), // Add routes here if needed
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
