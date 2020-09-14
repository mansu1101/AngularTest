import {Component, EventEmitter, OnInit, ViewChild} from '@angular/core';
import {Observable, of} from 'rxjs';
import {KonvaComponent} from 'ng2-konva';
import {ActivatedRoute, Router} from '@angular/router';

@Component({templateUrl: 'page.component.html'})
export class PageComponent implements OnInit {
  selectedImage = '/assets/bus1.jpg';
  page = '';
  images = ['/assets/bus1.jpg', '/assets/bus2.jpg', '/assets/bus3.jpg'];

  constructor(
    private route: ActivatedRoute,
    private router: Router) {
  }

  ngOnInit(): void {
    this.page = this.route.snapshot.params['page'];
    console.log(' this.page ', this.page);
  }


  clickImage(url) {
    this.selectedImage = url;
  }

}
