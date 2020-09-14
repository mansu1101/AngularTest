import {NgModule} from '@angular/core';
import {MapViewComponent} from './map-view/map-view.component';
import {FloorViewComponent} from './floor-view/floor-view.component';
import {KonvaModule} from 'ng2-konva';
import {CommonModule} from '@angular/common';

@NgModule({
  declarations: [
      MapViewComponent,
      FloorViewComponent
  ],
    imports: [
        KonvaModule,
        CommonModule
    ],
  exports: [
      MapViewComponent,
      FloorViewComponent,
      KonvaModule
  ]
})
export class ViewsModule {
}
