import { Component, OnInit } from '@angular/core';
import { qrcode } from 'qrcode';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  makeQR = inv => qrcode.toDataURL(`lightning:${inv.payreq}`.toUpperCase(), { margin: 2, width: 300 })

  constructor() { }

  ngOnInit() {
    
  }

}
