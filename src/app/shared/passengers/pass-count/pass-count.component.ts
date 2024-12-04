import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-pass-count',
  templateUrl: './pass-count.component.html',
  styleUrls: ['./pass-count.component.scss']
})
export class PassCountComponent implements OnInit {
@Input()totalCount!:number;
@Input()checkInCount!:number
  constructor() { }

  ngOnInit(): void {
  }

}
