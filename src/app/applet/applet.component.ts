import { Component, EventEmitter, inject, OnInit, Input } from '@angular/core';
import { AppletModel } from '../applet-model';
import { AppletListComponent } from '../applet-list/applet-list.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-applet',
  imports: [CommonModule, AppletListComponent],
  standalone: true,
  templateUrl: './applet.component.html',
  styleUrls: ['./applet.component.css'],
})
export class AppletComponent implements OnInit {
  @Input() appletList: AppletModel[] = [];

  ngOnInit() {}
}

/*
Author: Ruipeng Li
Above script is used for display applet list
*/
