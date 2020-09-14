import {Component, EventEmitter, OnInit, ViewChild} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {KonvaComponent} from 'ng2-konva';
import {MapviewConstants} from '../constants/mapview.constants';
import {Observable, of} from 'rxjs';

let ng: any;
@Component({
  selector: 'app-floor-view',
  templateUrl: './floor-view.component.html',
  styleUrls: ['./floor-view.component.scss']
})
export class FloorViewComponent implements OnInit {
  public configImage: EventEmitter<any> = new EventEmitter();
  public floorMapLoad = false;
  public floorMapLoading = true;
  page = '';
  floorMaps = [
    {srcPath: 'assets/floormap1.png', floorName: 'floor1' },
    {srcPath: 'assets/floormap4.jpg', floorName: 'floor2' },
    {srcPath: 'assets/floormap5.jpg', floorName: 'floor3'},
    {srcPath: 'assets/floormap4.jpg', floorName: 'floor4'},
    {srcPath: 'assets/floormap1.png', floorName: 'floor1'},
    {srcPath: 'assets/floormap5.jpg', floorName: 'floor2'}
  ];
  floorIds = [];
  selectedImagePath = '';
  selectedImage1 = 0;
  floorAssets = {};
  currentFloorAssets = [];
  public CurrentIndex = 0;
  floorMapConfigArray = [];

  constructor(
    private route: ActivatedRoute,
    private router: Router
  ) {
  }

  @ViewChild('stage') stage: KonvaComponent;
  @ViewChild('layer') layer: KonvaComponent;
  @ViewChild('assetLayer') assetLayer: KonvaComponent;

  public configStage: Observable<any> = of(MapviewConstants.FLOOR_CONFIG); // inconfig i am passing required properties to draw object

  showImage(src: any, config, object): void {
    if (src) {
      let image = new Image();
      image.src = src;
      image.onload = () => {
        object.image = image;
        config.emit(object);
      };
    }
    return config;
  }

  plotAssetsOnBaseImage(floorName): void {
    this.currentFloorAssets = [];
    // here assets are my number of object wanted to draw on base image.
    for (let assetIndex = 0; assetIndex < MapviewConstants.FLOOR_NO_OF_ASSETS[floorName]; assetIndex++) {
      const scale = Math.random();
      this.currentFloorAssets.push(
        this.showImage('/assets/asset2.png', new EventEmitter(), {
          x: Math.random() * 800,
          y: Math.random() * 200,
          image: '',
          draggable: true,
        }));
    }
    console.log('check currentFloorAssets :', this.currentFloorAssets);
  }

  showSelectedFloor(floorName: string) {
    // Here we rendering base image and than calling plot asset method to draw assets on base image.
    this.showImage(this.selectedImagePath, this.configImage, MapviewConstants.FLOOR_CONFIG);
    this.plotAssetsOnBaseImage(floorName);
  }

  onFloorSelected(floormap, index): void {
    this.selectedImagePath = floormap.srcPath;
    this.selectedImage1 = index;
    this.showSelectedFloor(floormap.floorName);
  }

  async ngOnInit(): Promise<void> {
    ng = this;
    this.onFloorSelected(this.floorMaps[0], this.selectedImage1); // here passing first element of mps as default
  }
}
