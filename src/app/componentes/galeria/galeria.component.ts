import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-galeria',
  templateUrl: './galeria.component.html',
  styleUrls: ['./galeria.component.css']
})
export class GaleriaComponent {

ngOnInit(){
  console.log(this);
}

  constructor(
    private route: ActivatedRoute,
  ) { }

}
