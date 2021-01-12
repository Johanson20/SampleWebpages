import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'upload-report';
  afuConfig = {
	  ind = 1;
	  uploadAPI: {url: "http://localhost:6106/uploads", date=new Date(), index=ind++}
  }
}
