import { Component, OnInit } from '@angular/core';
import { LightningService } from '../../../services/lightning.service';
import * as QRCode from 'qrcode';

@Component({
  selector: 'app-sell',
  providers: [LightningService],
  templateUrl: './sell.component.html',
  styleUrls: ['./sell.component.scss']
})
export class SellComponent implements OnInit {

  lightningQR: string;
  btcAmount: number;

  constructor(private lightningService: LightningService) { }

  ngOnInit() {
    this.CreateLightningQR("");
  }

  public CreateLightningQR(invoice: string): void {
    QRCode.toDataURL(`lightning:${invoice}`.toUpperCase(), { errorCorrectionLevel: 'L', margin: 2 })
      .then(url => {
        this.lightningQR = url;
        console.log(url);
      })
      .catch(err => {
        console.error(err);
      });
  }

  public CreateInvoice()
  {
    this.lightningService.CreateInvoice(this.btcAmount, "Bitar.is viðskipti").subscribe(r => {
      console.log(r.payreq);
      this.CreateLightningQR(r.payreq);
    });
  }

  public OnKey(value: number) {
    this.btcAmount = value * 100000000000; // convert btc -> msat
    //this.CreateLightningQR(value);
  }

}
