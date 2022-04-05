import {Component, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";


interface Book {
  ISBN: number;
  Title: string;
  Author: string;
}



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent implements OnInit {
  title = 'myApp-SL';
  url = '/api/books';
  books!: Book[];

  constructor(private http: HttpClient){
  }

  async ngOnInit(){
    // alert('Richard is cool');
    const response: any = await this.http.get(this.url).toPromise();
    console.log(response);
    if (response) {
      this.books = response;
      console.log(this.books);
    }
  }

}
