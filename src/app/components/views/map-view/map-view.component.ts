import {Component, EventEmitter, Inject, OnInit, ViewChild} from '@angular/core';
import {of, Observable} from 'rxjs';
import {KonvaComponent} from 'ng2-konva';
import {MapviewConstants} from '../constants/mapview.constants';

@Component({
  selector: 'app-map-view',
  templateUrl: './map-view.component.html',
  styleUrls: ['./map-view.component.scss']
})
export class MapViewComponent implements OnInit {
    public configImage: EventEmitter<any> = new EventEmitter();
    public marker: EventEmitter<any> = new EventEmitter();
    newArray = [];
    constructor(
    ) {}
    @ViewChild('stage') stage: KonvaComponent;
    @ViewChild('layer') layer: KonvaComponent;
    @ViewChild('text') text: KonvaComponent;

    public configStage: Observable<any> = of({
        width: window.innerWidth,
        height: window.innerHeight
    });
    public configText = of(MapviewConstants.TEXT_CONFIG);

    ngOnInit(): void {
        this.showImage('/assets/images/micron_boise_map.png', this.configImage, {
            width: window.innerWidth,
            height: window.innerHeight,
            image: ''
        });
        /*for (let n = 0; n < 5; n++) {
            // const scale = Math.random();
            this.newArray.push(
                //  this.showImage('/assets/images/asset2.png', new EventEmitter(), {
                this.showImage(MapviewConstants.MARKER_IMAGE_CONFIG.defaultImgPath.toString(), new EventEmitter(), {
                    x:  Math.random() * 800,
                    y:  Math.random() * 200,
                    image: '',
                    draggable: true,
                }));
            console.log('Yes inside the loop ................');
        }*/
        this.showImage(MapviewConstants.MARKER_IMAGE_CONFIG.defaultImgPath.toString(), this.marker,
        MapviewConstants.MARKER_IMAGE_CONFIG);
    }
    writeMessage(message: string): void {
        this.text.getStage().setText(message);
        this.layer.getStage().draw();
    }
    showImage(src: string, config, object): void {
        const image = new window.Image();
        image.src = src;
        image.onload = () => {
            object.image = image;
            config.emit(object);
        };
    }
    handleMouseOut(): void {
        this.writeMessage('Mouseout triangle');
    }
    handleClickImage(): void {
        // window.location.href = window.location.origin + this.navigationPath.FLOOR_NAVIGATOR;
    }
}
