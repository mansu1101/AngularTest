import {Injectable} from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class MapviewConstants {
    public static get TEXT_CONFIG() {
        return {
            x: 100,
            y: 100,
            fontFamily: 'Calibri',
            fontSize: 24,
            text: '',
            fill: 'black'
        };
    }
    public static get MARKER_IMAGE_CONFIG() {
        return {
            x: 770,
            y: 390,
            image: '',
            defaultImgPath: '/assets/images/iconfinder48px.png'
        };
    }

    public static get FLOOR_CONFIG() {
        return {
            width: window.innerWidth - 240,
            height: window.innerHeight,
            image: ''
        };
    }

    public static get FLOOR_THUMBNAIL_CONFIG() {
        return {
            width: 180,
            height: 100,
            image: ''
        };
    }

    public static get MEDIA_CONFIG() {
        return {
            mediaTypeMap: 'MAP',
            highResolution: 'high',
            lowresolution: 'low'
        };
    }

    public static get FLOOR_START_INDEX() {
        return 4;
    }
    public static get FLOOR_NO_OF_ASSETS(){
      return {
        floor1 : 5,
        floor2 : 2,
        floor3 : 7,
        floor4 : 3,
      };
    }
}
