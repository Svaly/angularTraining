import { Injectable } from '@angular/core';
import { Status } from './status.enum';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class FeatureOneDocumentService {

  constructor(private http: HttpClient) {}

   public changeDocumentStatus( id: string, newStatus: Status): Observable<boolean> {
      return of(true);
   }
}
