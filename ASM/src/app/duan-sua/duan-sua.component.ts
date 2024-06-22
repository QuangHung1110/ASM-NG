import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DulieuService } from '../dulieu.service';
import { INhanVien } from '../inhan-vien';
import { IDuAn } from '../idu-an';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { NgModule } from '@angular/core';

@Component({
  selector: 'app-duan-sua',
  standalone: true,
  imports: [
    FormsModule,
    CommonModule
  ],
  templateUrl: './duan-sua.component.html',
  styleUrl: './duan-sua.component.css'
})
export class DuanSuaComponent {
  id:number = 0;
  data:IDuAn = <IDuAn>{};
  listNhanVien:INhanVien[]=[];
  constructor(
    private d:DulieuService,
    private route:ActivatedRoute,
    private router: Router
  ){}
  ngOnInit():void{
    this.id = Number(this.route.snapshot.paramMap.get('id'));
    this.d.layNhanVien().subscribe ( data =>{
      this.listNhanVien = data as INhanVien[];
    });
    this.d.lay1DuAn( this.id).subscribe (da =>{
      console.log("da=", da);
      this.data = da as IDuAn;
    });
  }
  xuly(){
    this.d.suaDuAn(this.data).subscribe( result => {
      console.log (" result=", result);
      alert('Sửa thành công');
      this.router.navigate(['/du_an']);

    });
  }

}
