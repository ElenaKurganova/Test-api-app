import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {ApiService} from '../api.service';
import {Job} from '../job';

@Component({
  selector: 'app-job-detail',
  templateUrl: './job-detail.component.html',
  styleUrls: ['./job-detail.component.scss']
})
export class JobDetailComponent implements OnInit {

  job: Job = {
    title: '', description: '', referenceNo: null, state: '', startTime: '', endTime: '', duration: null,
    customerName: '', priority: ''
  };
  isLoadingData = true;

  constructor(private route: ActivatedRoute, private api: ApiService, private router: Router) {
  }

  ngOnInit() {
    this.getJobDetails(this.route.snapshot.params['id']);
  }

  getJobDetails(id) {
    this.api.getJob(id)
      .subscribe(data => {
        this.job = data;
        console.log(this.job);
        this.isLoadingData = false;
      });
  }
}
