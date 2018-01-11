import { Component, OnInit } from '@angular/core';
import { RadioService } from '../../-services/radio.service';
import { HttpErrorResponse } from '@angular/common/http/src/response';

@Component({
  selector: 'radio-list',
  templateUrl: './radio-list.component.html',
  styleUrls: ['./radio-list.component.sass']
})
export class RadioListComponent implements OnInit {

  page = 0;

  radio_list: any = [];
  radio_search = '';
  stream = '';

  loading = false;

  constructor(
    private _radioService: RadioService
  ) { }

  ngOnInit() {
  }

  getRadios(e) {
    let dir = e.target.innerText;
    if (dir == 'next') {
      this.page++;
    }
    if (dir == 'prev') {
      if(this.page > 0) {
        this.page--;
      }
    }

    this.radio_list = [];
    this._radioService.searchRadio(this.radio_search, this.page)
      .subscribe(
      res => {
        console.log(res);
        for (let i = 0; i < 10; i++) {

          let streams_length = res[i].streams.length;
          for (let j = 0; j < streams_length; j++) {
            if (
              // res[i].streams[j].status &&
              res[i].streams[j].bitrate &&
              res[i].streams[j].content_type !== '?' &&
              res[i].streams[j].content_type !== 'text/html'
            ) {

              let data = {
                name: res[i].name,
                stream: res[i].streams[j].stream
              }
              this.radio_list.push(data);
              this.stream = res[i].streams[j].stream;

              break;
            }
          }



        }
      },
      (err: HttpErrorResponse) => {
        if (err.error instanceof Error) {
          console.log("Client-side error occured.");
        } else {
          console.log("Server-side error occured.");
        }
      }
      )
    // console.log(this.radio_list);
  }

  show() {
    console.log(this.radio_list);
  }

  one() {
    this.loading = true;
    this._radioService.jjj()
      .subscribe(
      res => {
        console.log(res);
        this.loading = false;
      },
      (err: HttpErrorResponse) => {
        if (err.error instanceof Error) {
          console.log('client error');
        } else {
          console.log('Server error');
        }
      }
      )
  }

}
