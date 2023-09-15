import {
  Component,
  EventEmitter,
  inject,
  OnInit,
  Output,
  Input,
} from '@angular/core';
import { ScrollingModule } from '@angular/cdk/scrolling';
import { CommonModule } from '@angular/common';
import { LibraryService } from '../library.service';
import { CategoryListComponent } from '../category-list/category-list.component';
import { CategoryListModel } from '../category-list-model';
import { AppletModel } from '../applet-model';

@Component({
  selector: 'app-category',
  standalone: true,
  imports: [CommonModule, ScrollingModule, CategoryListComponent],
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css'],
})
export class CategoryComponent implements OnInit {
  libraryService: LibraryService = inject(LibraryService);
  @Input() libraryList: CategoryListModel[] = [];
  filteredList: CategoryListModel[] = [];
  selected: number = 0;
  index: number = 0;
  @Output() appletList = new EventEmitter<AppletModel[]>();

  constructor() {}

  filterResults(text: string) {
    this.filteredList = this.libraryService.getCategoriesWithCount(false);

    if (text) this.filteredList = this.removeUnmatchItems(text);

    this.appletList.emit(this.filteredList[0].appletList);
  }

  removeUnmatchItems(text: string): CategoryListModel[] {
    this.filteredList.forEach((x) => {
      let newlist: AppletModel[] = [];
      x.appletList.forEach((y, index) => {
        if (!y.name.toLowerCase().includes(text.toLowerCase())) {
          newlist = newlist.concat(x.appletList[index]);
        }
      });

      x.appletList = x.appletList.filter(function (val) {
        return newlist.indexOf(val) == -1;
      });
    });

    return this.filteredList.filter((x) => x.appletList.length > 0);
  }

  getIndex(i: number) {
    this.appletList.emit(this.filteredList[i].appletList);
    this.selected = i;
  }

  ngOnInit() {
    this.filteredList = this.libraryList;
    this.appletList.emit(this.libraryList[this.index].appletList);
  }
}
