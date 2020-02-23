import {Component, OnInit} from '@angular/core';
import {ItemService} from '@app/_services/item.service';
import {Item} from '@app/_models/item';

@Component({
  templateUrl: 'home.component.html',
  styleUrls: ['home.component.scss']
})
export class HomeComponent implements OnInit {
  loading = false;
  items: Item[];
  randomItem: Item;
  flipped = false;

  constructor(private itemService: ItemService) {}

  ngOnInit() {
    this.loading = true;
    // this.itemService
    //   .getAll()
    //   .pipe(first())
    //   .subscribe(items => {
    //     this.loading = false;
    //     this.items = items;
    //   });

    this.next();
  }

  flip() {
    this.flipped = !this.flipped;
  }

  next(): void {
    this.itemService.getRandom().subscribe(items => {
      if (items && items[0]) {
        this.randomItem = items[0];
        this.randomItem.header = this.trim(this.randomItem.header);
        this.randomItem.content = this.trim(this.randomItem.content);
        this.loading = false;
        this.flipped = false;
      }
    });
  }

  private trim(str: string): string {
    return str ? str.trim() : null;
  }

}
