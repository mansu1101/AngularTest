import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {KonvaModule} from 'ng2-konva';
import { AppComponent } from './app.component';
import { NgImageSliderModule } from 'ng-image-slider';
import {ViewsModule} from './components/views/views.module';
import { AppRoutingModule } from './app-routing.module';
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    KonvaModule,
    NgImageSliderModule,
    ViewsModule
  ],
  exports: [
    KonvaModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
