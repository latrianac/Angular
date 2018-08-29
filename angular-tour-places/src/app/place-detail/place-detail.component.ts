import { Component, OnInit, Input } from '@angular/core';
import { Place } from '../place';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { PlaceService }  from '../place.service';


@Component({
  selector: 'app-place-detail',
  templateUrl: './place-detail.component.html',
  styleUrls: ['./place-detail.component.css']
})


export class PlaceDetailComponent implements OnInit {
  @Input() place: Place;
  constructor(
    private route: ActivatedRoute,
    private placeService: PlaceService,
    private location: Location

    ) { }

  ngOnInit() {
    this.getPlace();
  }
  getPlace(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.placeService.getPlace(id)
      .subscribe(place => this.place = place);
  }
  goBack(): void {
    this.location.back();
  }
}
