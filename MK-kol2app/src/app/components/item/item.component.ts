import { Component, OnInit } from '@angular/core';
import {DataService} from '../../services/data.service';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})


export class ItemComponent implements OnInit {
  public items$: any;
  constructor(private service: DataService) {
  }

  ngOnInit() {
    this.getAll();
  }
  getAll() {
    this.service.getAll().subscribe(response => {
      this.items$ = response;
    });
  }








}
