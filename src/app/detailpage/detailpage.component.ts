import { Component, OnInit } from '@angular/core';
import { HttpService } from '../services/http.service';

@Component({
  selector: 'app-detailpage',
  templateUrl: './detailpage.component.html',
  styleUrls: ['./detailpage.component.scss']
})
export class DetailpageComponent implements OnInit {
  movieData: any;
  title: string;
  rating: any;
  constructor(private getCall: HttpService) { }

  ngOnInit() {
    this.getCall.currentTitle.subscribe(title => {
      this.title = title;
      this.getData();
    }, (err) => {
      console.log('some error found');
    } );

  }
  getData() {
    this.getCall.get(`t=${this.title}`).subscribe((data: any) => {
      console.log(data, 'movieData');
      this.movieData = data;
      this.rating = data.Ratings;
    });
  }
}
