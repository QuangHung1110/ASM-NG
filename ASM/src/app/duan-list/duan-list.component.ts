import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { IDuAn } from '../idu-an';
@Component({
  selector: 'app-duan-list',
  standalone: true,
  imports: [
    CommonModule,

  ],
  templateUrl: './duan-list.component.html',
  styleUrl: './duan-list.component.css'
})
export class DuanListComponent {
  list_du_an:IDuAn[]=[
    
  ];
  ngOnInit():void{
    fetch(`http://localhost:3000/du_an`)
    .then ( res=>res.json())
    .then (data =>{
      this.list_du_an = data;
    })
  }
}
