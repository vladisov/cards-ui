import {Component, OnInit} from '@angular/core';
import {first} from 'rxjs/operators';
import {ItemService} from '@app/_services/item.service';
import {Item} from '@app/_models/item';

@Component({templateUrl: 'home.component.html'})
export class HomeComponent implements OnInit {
  loading = false;
  items: Item[];

  constructor(private itemService: ItemService) {
  }

  ngOnInit() {
    this.loading = true;
    this.itemService.getAll().pipe(first())
      .subscribe(items => {
        this.loading = false;
        this.items = items;
      });
  }
}
