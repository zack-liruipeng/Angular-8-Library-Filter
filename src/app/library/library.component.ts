import { Component, inject, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CategoryComponent } from '../category/category.component';
import { AppletComponent } from '../applet/applet.component';
import { CategoryListModel } from '../category-list-model';
import { AppletModel } from '../applet-model';
import { LibraryService } from '../library.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, CategoryComponent, AppletComponent],
  template: ` 
          <div class="row">
            <div class="col-sm-5">
              <app-category
              (appletList)="getAppletList($event)"
              [libraryList] ='libraryList'
              > 
              </app-category>
            </div>  
            <div class="col-sm-7">
              <app-applet [appletList]="appletList">
              </app-applet>
            </div>
          </div>
  `,

  styleUrls: ['./library.component.css'],
})
export class LibraryComponent {
  libraryService: LibraryService = inject(LibraryService);
  libraryList: CategoryListModel[] = [];
  appletList: AppletModel[] = [];

  constructor() {
    this.libraryList = this.libraryService.getCategoriesWithCount(true);
  }

  getAppletList(selectedAppletList: AppletModel[]) {
    this.appletList = selectedAppletList;
  }
}
