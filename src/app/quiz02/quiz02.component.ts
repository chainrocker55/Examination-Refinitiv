import { Categories } from './../model/categories.model';
import {AfterViewInit, Component, ViewChild} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';

import { RepositoryService } from '../shared/repository.service';

@Component({
  selector: 'app-quiz02',
  templateUrl: './quiz02.component.html',
  styleUrls: ['./quiz02.component.css']
})
export class Quiz02Component implements AfterViewInit {
  datalist: string[] = [];

  displayedColumns: string[] = ['Categories'];
  dataSource!: MatTableDataSource<Categories>;
  
  dataList: Categories[] = [];
 
 
  @ViewChild(MatPaginator,) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(private service:RepositoryService) {
    this.initialize();
  }
  initialize() {
    
    this.service.getData().subscribe(res=>{
      for (const index in res) {
        var data:Categories = {name:res[index]}
        this.dataList.push(data);
      }
      this.dataSource = new MatTableDataSource(this.dataList);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
      console.log(res)
    },error=>{
      console.log(error)
    })
  }

  ngAfterViewInit() {
    // this.dataSource.paginator = this.paginator;
    // this.dataSource.sort = this.sort;
  }

  applyFilter(event: Event) {

    const filterValue = (event.target as HTMLInputElement).value;

    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
}


