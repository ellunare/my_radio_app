import { Injectable } from '@angular/core';
import {
  HttpClient,
  HttpParams,
  HttpHeaders
} from '@angular/common/http';

// import { Http, Headers } from '@angular/http';

// import 'rxjs/add/operator/map';

@Injectable()
export class RadioService {

  API_TOKEN = '18543e651632d30bb8affb9792';

  constructor(
    private _http: HttpClient,
    // private hhh: Http
  ) { }

  searchRadio(radio, page) {

    let url = 'http://api.dirble.com/v2/search?token=';

    let body = {
      query: radio,
      page: page
    }

    let headers = new HttpHeaders();
    // headers.append('Content-Type', 'application/json');
    headers.append('lala', 'nanana');

    // interface radio {
    //   idd: number,
    //   name: string
    // }
    // <radio>

    return this._http.post(url + this.API_TOKEN, body, { headers: headers });
    // .map(res => {
    //   return res.json()
    // })
  }

  jjj() {
    return this._http.get("https://jsonplaceholder.typicode.com/users");
  }

}
