import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import {Place} from './place'
import { PLACES } from './bogota-places';
import { MessageService } from './message.service';

@Injectable({
  providedIn: 'root',

})

export class PlaceService {
  constructor(private messageService: MessageService) { }
  getPlaces(): Observable<Place[]> {
    // TODO: send the message _after_ fetching the places
    this.messageService.add('Lugares encontrados PlaceService: fetched places');
    return of(PLACES);
  }

  
}









