import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-category-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.css'],
})
export class CategoryListComponent implements OnInit {
  @Input() i: number = 0;
  @Input() selected: number = 0;
  @Input() categoryName: string = '';
  @Input() categoryCount: number = 0;
  @Output() selectedIndex = new EventEmitter<number>();
  ngOnInit() {}

  onClick(i: number) {
    this.selectedIndex.emit(i);
  }

  getButtonStyle(index: number) {
    if (this.selected == index) {
      return {
        'btn-primary': true,
      };
    } else {
      return {
        'text-primary': true,
      };
    }
  }

  getCircleStyle(index: number) {
    if (this.selected == index) {
      return {
        circleActive: true,
      };
    } else {
      return {
        circleNotActive: true,
      };
    }
  }
}

/*
Author: Ruipeng Li
Above function is used for display categories and emit index
*/
