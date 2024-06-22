import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { INhanVien } from '../inhan-vien';
import { DulieuService } from '../dulieu.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nv-sua',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule
  ],
  templateUrl: './nv-sua.component.html',
  styleUrl: './nv-sua.component.css'
})
export class NvSuaComponent {
  id:number=0;
  data:INhanVien =<INhanVien>{};
  constructor(
    private d:DulieuService,
    private route: ActivatedRoute,
    private router: Router
  ){}
  ngOnInit():void{
    this.id = Number(this.route.snapshot.paramMap.get('id'));
    this.d.lay1NhanVien(this.id).subscribe(nv=>{
      console.log("nv=",nv);
      this.data = nv as INhanVien;
    });
  }
  xuly(){
    this.d.suaNhanVien(this.data).subscribe(result=>{
      console.log("result=",result);
      alert("Sửa thành công");
      this.router.navigate(['/nhan_vien']);
    });
  }

}
