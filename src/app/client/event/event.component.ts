import { Component, OnInit, inject } from '@angular/core';
import { EventServiceService } from 'src/app/services/event/event-service.service';
import { LoaderServiceService } from 'src/app/services/loader/loader-service.service';

@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.css']
})
export class EventComponent implements OnInit {
  events : any[] = [];
  constructor(private eventservice : EventServiceService){}

  loader = inject(LoaderServiceService);

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
