import { Injectable } from '@angular/core';
import { AppletModel } from './applet-model';
import { LibraryModel } from './library-model';
import { CategoryListModel } from './category-list-model';

@Injectable({
  providedIn: 'root',
})
export class LibraryService {
  protected lib: LibraryModel = {
    categories: ['Performance', 'Investments', 'Operations'],
    applets: [
      {
        name: 'Performance Snapshot',
        categories: ['Performance'],
      },
      {
        name: 'Commitment Widget',
        categories: ['Investments'],
      },
      {
        name: 'CMS',
        categories: ['Investments', 'Performance'],
      },
    ],
  };

  getLibrary(): LibraryModel {
    return this.lib;
  }

  getAllCategories(): string[] {
    return this.lib.categories.sort((a, b) => a.localeCompare(b));
  }

  getAppletsByCategory(category: string): AppletModel | undefined {
    return this.lib.applets.find((x) => x.categories.includes(category));
  }

  getCategoriesWithCount(addBigData: boolean): CategoryListModel[] {
    let categoryList: CategoryListModel[] = [];

    if (addBigData) {
      const start = new Date().getTime();
      //this.lib = this.addBigData(this.lib, 2, 2);
      //this.lib = this.addBigData(this.lib, 5, 5);
      //this.lib = this.addBigData(this.lib, 10, 10);
      //this.lib = this.addBigData(this.lib, 50, 50);
      //this.lib = this.addBigData(this.lib, 100, 100);
      //this.lib = this.addBigData(this.lib, 1000, 1000);
      //this.lib = this.addBigData(this.lib, 5000, 5000);
      //this.lib = this.addBigData(this.lib, 8000, 8000);
      //this.lib = this.addBigData(this.lib, 15000, 15000);

      let elapsed = new Date().getTime() - start;
      console.log('Execution time', elapsed);
      //can be done by using pagingnation, lazy loading,
    }

    let categoryNames = this.lib.categories.sort((a, b) => a.localeCompare(b));

    let that = this;
    categoryNames.forEach(function (categoryName) {
      /* Find applets that contains the category name */
      let appletList = that.lib.applets.filter((x) =>
        x.categories.includes(categoryName)
      );

      let list: CategoryListModel = {
        categoryName,
        appletList,
      };

      categoryList.push(list);
    });

    return categoryList;
  }

  addBigData(lib: LibraryModel, ncategs: number, napplets: number) {
    for (var i = 0; i < ncategs; i++) {
      lib.categories.push('Sample Category ' + i);
    }
    var n = lib.categories.length;
    for (var i = 0; i < napplets; i++) {
      var a = {
        name: 'CMS' + i,
        categories: [''],
      };
      for (var j = 0; j < Math.floor(Math.random() * 10); ++j) {
        var idx = Math.floor(Math.random() * n) % n;
        a.categories.push(lib.categories[idx]);
      }
      lib.applets.push(a);
    }
    return lib;
  }
}

/*
Author: Ruipeng Li
Above function is used for define libriary services
*/
