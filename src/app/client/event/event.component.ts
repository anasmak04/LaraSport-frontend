import { Component, OnInit } from '@angular/core';
import { EventServiceService } from 'src/app/services/event/event-service.service';

@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.css']
})
export class EventComponent implements OnInit {
  events : any[] = [];
  constructor(private eventservice : EventServiceService){}

  ngOnInit(): void {
    this.getAll();
  }

  getAll(){
    this.eventservice.FindAllEvents().subscribe({
      next : (response) => {
          this.events = response.event
          console.log(this.events)
      },

      error : (err) => console.log(err)
    });
  }


}
