import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-quiz01',
  templateUrl: './quiz01.component.html',
  styleUrls: ['./quiz01.component.css']
})
export class Quiz01Component implements OnInit {

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
  }

}
