import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-textfields',
  templateUrl: './textfields.page.html',
  styleUrls: ['./textfields.page.scss'],
})
export class TextfieldsPage implements OnInit {
  public folder: string;

  constructor(
      private activatedRoute: ActivatedRoute,
      private router: Router) { }

  ngOnInit() {
    this.folder = this.activatedRoute.snapshot.paramMap.get('id');
  }
}
