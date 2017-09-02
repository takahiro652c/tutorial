import { Component, OnInit } from '@angular/core';
import { HogeService, Hoge2Service } from "app/hoge.service";
import { Hoge } from "app/hoge";

@Component({
  selector: 'my-app',
  styleUrls: ['./app.component.css'],
  template: `
    <h1>{{title}}</h1>
    <nav>
      <a routerLink="/dashboard" routerLinkActive="active">Dashboard</a>
      <a routerLink="/heroes" routerLinkActive="active">Heroes</a>
    </nav>
    <router-outlet></router-outlet>
  `,
})
export class AppComponent implements OnInit {
  hoge: Hoge;
  title = 'Tour of Heroes';
  constructor(
    private hogeService: HogeService,
    private hoge2Service: Hoge2Service
  ) { }

  ngOnInit(): void {
    this.hogeService.requestGetHoge().then(hoges => {
      this.hoge2Service.hoge = hoges[0];
      this.hoge = this.hoge2Service.hoge;
      this.title = this.hoge2Service.hoge.name;
    });
  }
}
