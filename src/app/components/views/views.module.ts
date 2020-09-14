import {NgModule} from '@angular/core';
import {FloorViewComponent} from './floor-view/floor-view.component';
import {KonvaModule} from 'ng2-konva';
import {CommonModule} from '@angular/common';

@NgModule({
  declarations: [
      FloorViewComponent
  ],
    imports: [
        KonvaModule,
        CommonModule
    ],
  exports: [
      FloorViewComponent,
      KonvaModule
  ]
})
export class ViewsModule {
}
