import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MeosService } from '../meos.service';
import { first } from 'rxjs';

@Component({
  selector: 'app-add-meo',
  templateUrl: './add-meo.component.html',
  styleUrls: ['./add-meo.component.css']
})
export class AddMeoComponent implements OnInit {
  angForm: FormGroup;
  postdata(forms: any) {
    this.meoService.addMeo(
      this.angForm.value.name,
      this.angForm.value.price,
      this.angForm.value.quantity,
    ).pipe(first()).subscribe(data =>{
        console.log(data);
    }
    )
  }

  constructor(
    private fb: FormBuilder,
    private route: Router,
    private meoService: MeosService
  ){
    this.angForm = this.fb.group({
      name: ['', Validators.required],
      price: ['', Validators.required],
      quantity: ['', Validators.required],
    });
  }

ngOnInit(): void {
    
}

}
