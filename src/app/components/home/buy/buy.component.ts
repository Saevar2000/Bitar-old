import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { HubConnection } from '@aspnet/signalr';
import { LightningService } from '../../../services/lightning.service';

@Component({
  selector: 'app-buy',
  providers: [ LightningService ],
  templateUrl: './buy.component.html',
  styleUrls: ['./buy.component.scss']
})
export class BuyComponent implements OnInit {
  isLinear = true;
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;

  constructor(
    private _formBuilder: FormBuilder, 
    private lightningService: LightningService
  ) { }

  ngOnInit() {
    let connection = new HubConnection('https://localhost:5001/pricehub');

    connection.on('send', data => {
      console.log(data);
    });

    connection.start()
      .then(() => console.log("Connected"));

    this.firstFormGroup = this._formBuilder.group({
      firstCtrl: ['', Validators.required]
    });
    this.secondFormGroup = this._formBuilder.group({
      secondCtrl: ['', Validators.required]
    });

    this.lightningService.getInfo().subscribe( r => {
      console.log('tada' + r);
    });
  }

}
