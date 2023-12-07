import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MeosService } from '../meos.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, OnDestroy{
  message: String | undefined;
  constructor(
    private meoService: MeosService,
  ){}
  
  getdata(): void{
    this.meoService.getWelcome().then(
      message => this.message = message,
      error => console.log(error)
    );
  }

  ngOnInit(): void {
      this.getdata();
  }

  ngOnDestroy(): void {
    
  }

}
