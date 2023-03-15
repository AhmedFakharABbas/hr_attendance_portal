import { Component, OnInit } from '@angular/core';
import { LoaderService } from '../../../services/loader.service';

@Component({
  selector: 'app-http-loader',
  templateUrl: './http-loader.component.html',
  styleUrls: ['./http-loader.component.css']
})
export class HttpLoaderComponent implements OnInit {
  showLoader = false;

  constructor(private loaderService: LoaderService) {
    this.loaderService.isLoading
      .subscribe((v) => {
        this.showLoader = v;
      });
  }

  ngOnInit() { }

}
