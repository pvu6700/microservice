import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { MeoMgmtApiService } from './meo-mgnt/meo-mgmt-api.service';
import { Meo } from './meo-mgnt/meo-mgmt.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy{

  title = 'meo-web-UI';
  meoListSub: Subscription = new Subscription;
  meoList: Meo[] = [];

  constructor(private meoApi: MeoMgmtApiService){
    
  }


  ngOnDestroy(): void {
    this.meoListSub.unsubscribe();
  }

  ngOnInit(): void {
    this.meoListSub = this.meoApi.getMeo().subscribe(
      res => {
        this.meoList = res;
      },
      console.error
    );
  }
}
