import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-works',
  templateUrl: './works.component.html',
  styleUrls: ['./works.component.scss'],
})
export class WorksComponent implements OnInit {
  public isAdded1 = false;
  public isAdded2 = false;
  public isAdded3 = false;

  constructor(private router: Router, private _location: Location) {
    if (router.url === '/works/cenzor') this.isAdded1 = true;
    if (router.url === '/works/userlist') this.isAdded2 = true;
    if (router.url === '/works/tasklist') this.isAdded3 = true;
  }

  ngOnInit(): void {}

  ngOnChanges(): void {
    this.changeActive1();
    this.changeActive2();
    this.changeActive3();
  }

  changeActive1(): void {
    this.isAdded1 = true;
    this.isAdded2 = false;
    this.isAdded3 = false;
  }
  changeActive2(): void {
    this.isAdded1 = false;
    this.isAdded2 = true;
    this.isAdded3 = false;
  }
  changeActive3(): void {
    this.isAdded1 = false;
    this.isAdded2 = false;
    this.isAdded3 = true;
  }

  backClicked() {
    this._location.back();    
  }
}
