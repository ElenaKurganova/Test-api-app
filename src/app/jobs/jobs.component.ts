import {Component, OnInit} from '@angular/core';
import {ApiService} from '../api.service';
import {Job} from '../job';

@Component({
  selector: 'app-jobs',
  templateUrl: './jobs.component.html',
  styleUrls: ['./jobs.component.scss']
})
export class JobsComponent implements OnInit {
  displayedColumns: string[] = ['referenceNo', 'title', 'description', 'state', 'priority'];
  data: Job[] = [];
  isLoadingData = true;

  constructor(private api: ApiService) {
  }

  ngOnInit() {
    this.api.getJobs()
      .subscribe(res => {
        this.data = res;
        console.log(this.data);
        this.isLoadingData = false;
      }, err => {
        console.log(err);
        this.isLoadingData = false;
      });
  }

}
