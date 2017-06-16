import { Component } from '@angular/core';

@Component({
  selector: 'events-list',
  template: `
    <div>
      <h1>Upcoming Angular 4 Events</h1>
      <hr/>
      <event-thumbnail #burrito [event]="event1"></event-thumbnail>
    </div>
  `
})

// Parent - EventThumbnailComponent 
export class EventsListComponent {
  event1 = {
    id: 1,
    name: 'Angular Connect', 
    date: '9/25/2055',
    time: '10:00 am',
    price: 599.99, 
    imageUrl: '/app/assets/images/angularconnect-shield.png',
    location: {
      address: '1057 DT',
      city: 'London', 
      country: 'England'
    }
  }

}