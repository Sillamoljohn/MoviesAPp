import { Component, OnInit } from '@angular/core';
import { HttpService } from '../services/http.service';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent implements OnInit {
  movieData: any;
  constructor(
    private getCall: HttpService,
    private route: Router,
  ) { }

  ngOnInit() {
    this.getData();
  }
  getData() {
    this.getCall.get('s=harry potter').subscribe((data: any) => {
      this.movieData = data.Search;
      console.log(this.movieData, 'movieData');
    });
  }
  getDetails(data) {
    this.getCall.changeTitle(data);
    this.route.navigateByUrl('/detail_page');
    console.log(data);
  }
}
