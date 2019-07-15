import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class HttpService {

  text = '';
  pageUrl: any;
  sidenav = '';
  count: number;
  private titleSource = new BehaviorSubject('harry potter');
  currentTitle = this.titleSource.asObservable();
  public httpconfig = {
    initUrl: 'http://www.omdbapi.com/?',
    endUrl: '&apikey=140cd679'
  };
  constructor(private http: HttpClient) { }
  changeTitle(title: string) {
    this.titleSource.next(title);
  }
  // get apis
  get(midUrl: string) {
    console.log(midUrl, 'midurl');
    return this.http
      .get(this.httpconfig.initUrl + midUrl + this.httpconfig.endUrl);
  }
}







