import { Component, OnDestroy, OnInit } from '@angular/core';
import { Meos } from '../meo.model';
import { MeosService } from '../meos.service';

@Component({
  selector: 'app-list-meo',
  templateUrl: './list-meo.component.html',
  styleUrls: ['./list-meo.component.css']
})
export class ListMeoComponent implements OnInit, OnDestroy {
  listMeos: Meos[] = [];

  constructor(
    private meoService: MeosService,
  ){}

  getMeos(): void{
    this.meoService.getMeos().subscribe(
      listMeo => this.listMeos = listMeo
    );
  }

  ngOnDestroy(): void {
    throw new Error('Method not implemented.');
  }
  ngOnInit(): void {
    this.getMeos();
  }

}
