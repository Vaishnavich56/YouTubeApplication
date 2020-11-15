import { AfterViewInit, Component, OnInit,ViewChild  } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { MasterResource } from '../helper/masterresource.service';
import { Application } from '../models/application.model';

@Component({
  selector: 'app-screen2',
  templateUrl: './screen2.component.html',
  styleUrls: ['./screen2.component.css']
})
export class Screen2Component implements OnInit, AfterViewInit {
  loading = false;
  displayedColumns = ['title','link','description','status','platform'];
  dataSource = new MatTableDataSource<Application>(this.masterResourceService.dataTableList);
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  constructor(public masterResourceService: MasterResource) { }

  ngOnInit(): void {
    if(this.masterResourceService.dataTableList !== null && this.masterResourceService.dataTableList !== undefined) { 
      this.loading = false;
    } else{
      this.loading = true;
    }
  }
  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }
  applyFilter(filterValue: string) {
    filterValue = filterValue.toLowerCase();
    this.dataSource.filter = filterValue;
  }
  onRowClick(row)
  {
  }
  
}
