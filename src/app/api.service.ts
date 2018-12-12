import {Inject, Injectable} from '@angular/core';
import {Observable, of, throwError} from 'rxjs';
import {HttpClient, HttpHeaders, HttpErrorResponse} from '@angular/common/http';
import {catchError, tap, map} from 'rxjs/operators';
import {Job} from './job';
import { SESSION_STORAGE, StorageService } from 'angular-webstorage-service';

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};

const apiUrl = 'https://app.coredination.net/api/1/job' ;

@Injectable({
  providedIn: 'root'
})

export class ApiService {
  // key: string;
  constructor(private http: HttpClient, @Inject(SESSION_STORAGE) private storage: StorageService) {
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error); // log error to console
      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

  getJobs (): Observable<Job[]> {
    const key_val = this.storage.get('key');
    const url = `${apiUrl}?api_key=${key_val}`;
    return this.http.get<Job[]>(url)
      .pipe(
        tap(jobs => console.log('Fetched all jobs')),
        catchError(this.handleError('getJobs', []))
      );
  }

  getJob(id: number): Observable<Job> {
    const key_val = this.storage.get('key');
    const url = `${apiUrl}/${id}?api_key=${key_val}`;
    return this.http.get<Job>(url).pipe(
      tap(_id => console.log(`Fetched job with id = ${id}`)),
      catchError(this.handleError<Job>(`getJob id=${id}`))
    );
  }

}
