import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-screen3',
  templateUrl: './screen3.component.html',
  styleUrls: ['./screen3.component.css']
})
export class Screen3Component implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  player: YT.Player;
  public id: string = 'xcJtL7QggTI';

}
