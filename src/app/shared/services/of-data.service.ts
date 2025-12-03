import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { OFDocument } from '../../types/of-data.type';

const data: OFDocument[] = [
  {
    id: '1',
    name: 'John Doe',
    age: 25,
  },
  {
    id: '2',
    name: 'Alex',
    age: 28,
  },
];

@Injectable({
  providedIn: 'root',
})
export class OfDataService {
  constructor() {}

  getOfData(additionalData?: OFDocument[]): Observable<OFDocument[]> {
    return of(additionalData ? [...data, ...additionalData] : data);
  }
}
