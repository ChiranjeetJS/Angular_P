import { Component, OnInit } from '@angular/core';
//import { datacomp } from '../datacomp';

@Component({
  selector: 'app-datacomp',
  templateUrl: './datacomp.component.html',
  styleUrls: ['./datacomp.component.css']
})
export class DatacompComponent implements OnInit {

  d_list = [
    {
      "id":2,
      "val":5,
      "name":"Sample Data1",
    },
    {
      "id":3,
      "val":10,
      "name":"Sample Data2",
    },
    {
      "id":5,
      "val":9,
      "name":"Sample Data3",
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
