import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Item} from '@app/_models/item';
import {environment} from '@environments/environment';

@Injectable({providedIn: 'root'})
export class ItemService {
  constructor(private http: HttpClient) {
  }

  getAll() {
    return this.http.get<Item[]>(`${environment.apiUrl}/api/item/all`);
  }
}
