import { Component, OnInit } from '@angular/core';
import { PresidentService } from '../services/president.service';
import { President } from '../models/president';
import { OrderPipe } from 'ngx-order-pipe';



@Component({
  selector: 'app-presidents',
  templateUrl: './presidents.component.html',
  styleUrls: ['./presidents.component.css']
})
export class PresidentsComponent implements OnInit {

  presidents: President[];
  sortType = 'name';
  sortReverse = false;
  arrow = '';
  constructor(private presidentService: PresidentService,private orderPipe: OrderPipe) {
   }

  ngOnInit() {
    this.presidentService.getPresidents().then(res =>{
      console.log(res.json());
      this.presidents = res.json();
      this.sortType = 'name';

    })
  }

  sort(type: string) {
    this.sortType  = type;
    this.sortReverse = !this.sortReverse;
    if(this.sortReverse === true) {
      this.arrow = type + 'Up';
    }
    else {
      this.arrow = type + 'Down';
    }
  }
 
}