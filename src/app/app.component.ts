import { Component, OnInit } from '@angular/core';
import { Chart, registerables } from 'chart.js';
import { Store } from '@ngrx/store';
Chart.register(...registerables);

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  constructor(private store : Store<any>){
    store.subscribe((state) => {
      this.count = state.counter.n;
    })
  }

  ngOnInit(): void {
  }

  title = 'laraSport-front';

  count : number = 0;

  increase(){
    this.store.dispatch({type : "INCREMENT"});
  }


  decrease(){
     this.store.dispatch({type : "DECREMENT"});
  }
}
