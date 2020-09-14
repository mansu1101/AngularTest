import {Component, EventEmitter, OnInit, ViewChild} from '@angular/core';
import {Observable, of} from 'rxjs';
import {KonvaComponent} from 'ng2-konva';
import {ActivatedRoute, Router} from '@angular/router';
import {BehaviorSubject} from 'rxjs';

let ng: any;
declare const Konva: any;

@Component({templateUrl: 'main.component.html'})
export class MainComponent implements OnInit {
  public configImage: EventEmitter<any> = new EventEmitter();
  public configImage1: EventEmitter<any> = new EventEmitter();
  public busIcon: EventEmitter<any> = new EventEmitter();
  public busIcon2: EventEmitter<any> = new EventEmitter();

  constructor(
    private route: ActivatedRoute,
    private router: Router) {
  }

  @ViewChild('stage') stage: KonvaComponent;
  @ViewChild('layer') layer: KonvaComponent;
  @ViewChild('text') text: KonvaComponent;
  @ViewChild('dragLayer') dragLayer: KonvaComponent;
  public configStage: Observable<any> = of({
    width: window.innerWidth,
    height: window.innerHeight
  });
  public list: Array<any> = [];

  public handleDragstart(ngComponent: KonvaComponent) {
    const shape = ngComponent.getStage();
    const dragLayer = ng.dragLayer.getStage();
    const stage = ng.stage.getStage();

    // moving to another layer will improve dragging performance
    shape.moveTo(dragLayer);
    stage.draw();

    ngComponent.config.next({
      shadowOffsetX: 15,
      shadowOffsetY: 15,
      scaleX: ngComponent.getConfig().startScale * 1.2,
      scaleY: ngComponent.getConfig().startScale * 1.2,
    });
  }


  public handleDragend(ngComponent: KonvaComponent) {
    const shape = ngComponent.getStage();
    const layer = ng.layer.getStage();
    const stage = ng.stage.getStage();

    shape.moveTo(layer);
    stage.draw();

    shape.to({
      duration: 0.5,
      easing: Konva.Easings.ElasticEaseOut,
      scaleX: ngComponent.getConfig().startScale,
      scaleY: ngComponent.getConfig().startScale,
      shadowOffsetX: 5,
      shadowOffsetY: 5
    });
  }

  public ngOnInit() {
    ng = this;
    this.showImage('/assets/micron_Boise.png', this.configImage, {
      image: ''
    });
    /*this.showImage('/assets/rail.png', this.configImage, {
      x: Math.random() * 800,
      y: Math.random() * 200,
      image: '',
      draggable: true,
    });*/
    for (let n = 0; n < 10; n++) {
      const scale = Math.random();
      this.list.push(
        this.showImage('/assets/asset2.png', new EventEmitter(), {
          x: Math.random() * 800,
          y: Math.random() * 200,
          image: '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',
          draggable: true,
        })
      );
    }
  }

  showImage(src: string, config, object): any {
    const image = new window.Image();
    image.src = src;
    image.onload = () => {
      object.image = image;
      config.emit(object);
    };

    return config;
  }

}
