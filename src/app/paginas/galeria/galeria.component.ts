import { Component, ViewEncapsulation} from '@angular/core';
import lgZoom from 'lightgallery/plugins/zoom';
import { LightgalleryModule } from 'lightgallery/angular/13';
import { BeforeSlideDetail } from 'lightgallery/lg-events';
import { NgOptimizedImage } from '@angular/common';

@Component({
  selector: 'app-galeriaPage',
  templateUrl: './galeria.component.html',
  styleUrls: ['./galeria.component.css'],
  encapsulation: ViewEncapsulation.None

})
export class GaleriaPageComponent {
  settings = {
        counter: false,
        plugins: [lgZoom],
    };
    onBeforeSlide = (detail: BeforeSlideDetail): void => {
        const { index, prevIndex } = detail;
        console.log(index, prevIndex);
    };
}
