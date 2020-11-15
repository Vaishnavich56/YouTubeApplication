import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(public router: Router)
  {

  }
  ngOnInit(): void {

  }
  onScreen1()
  {
  this.router.navigate(['/screen1']);
  }
  onScreen2(){
    this.router.navigate(['/screen2']);
  }
  onScreen3(){
    this.router.navigate(['/screen3']);
  }

}
