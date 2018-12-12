import {Component, Inject, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {ApiService} from '../api.service';
import { SESSION_STORAGE, StorageService } from 'angular-webstorage-service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  key: string;

  constructor(private router: Router, private apiService: ApiService, @Inject(SESSION_STORAGE) private storage:        StorageService) {
  }


  ngOnInit() {
  }

  login(): void {
    if (this.key !== undefined) {
      console.log(this.key);

      // Store
      this.storage.set('key', this.key);

      this.router.navigate(['/home']);
    } else {
      alert('Invalid key');
    }
  }
}
