import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-applet-list',
  standalone: true,
  templateUrl: './applet-list.component.html',
  styleUrls: ['./applet-list.component.css'],
})
export class AppletListComponent implements OnInit {
  @Input() appletName: string = '';

  ngOnInit() {}
}

/*
Author: Ruipeng Li
Above function is used for display applets
*/
