import { IDashboard } from './../../../shared/interfaces/dashboard.interface';
import { Component } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {
homeList: IDashboard[] = [
  {
    id:0,
    title:"Material Didático",
    colorBar:'blue',
    img:"./assets/images/material-didatico.png",
  },
  {
    id:1,
    title:"Quiz",
    colorBar:'green',
    img:"./assets/images/quiz.png",
  },
  {
    id:2,
    title:"Desenho",
    colorBar:'pink',
    img:"./assets/images/desenho.png",
  },
  {
    id:3,
    title:"Youtube",
    colorBar:'red',
    img:"./assets/images/yt.png",
  },
]
}
