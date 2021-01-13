import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'upload-report';
  selectedFile: any = null
  
  constructor(private http: HttpClient) {}
  
 /*  afuConfig = {
	  uploadAPI: {url: "./uploads"}
  } */
  
  onFileSelected(event: any){
	  this.selectedFile = event.target.files[0]
  }
  
  onUpload() {
	  const fd = new FormData()
	  fd.append('image', this.selectedFile, this.selectedFile.name)
	  this.http.post('https:/console.firebase.google.com/u/0/project/upload-files-f49c0/storage/upload-files-f49c0.appspot.com/files', fd, {
	  reportProgress: true, observe: 'events'		  
	  })
	  .subscribe(event => {
		console.log(event)
	  })
  }
}
