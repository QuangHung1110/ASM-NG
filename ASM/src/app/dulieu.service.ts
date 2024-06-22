import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IDuAn } from './idu-an';
import { INhanVien } from './inhan-vien';
import { ITask } from './itask';
@Injectable({
  providedIn: 'root'
})
export class DulieuService {
  constructor(private h:HttpClient){
  }
  // du-an
  layDuAn(){
    return this.h.get('http://localhost:3000/du_an');
   }
  lay1DuAn(id:number=0){
    return this.h.get(`http://localhost:3000/du_an/${id}`);
  }
  themDuAn(da:IDuAn){
    return this.h.post('http://localhost:3000/du_an',da);
  }
  xoaDuAn(id:number){
    return this.h.delete('http://localhost:3000/du_an/'+id);
  }
  suaDuAn(da:IDuAn){
    return this.h.put('http://localhost:3000/du_an/'+da.id,da);
  }
  
  // nhan_vien
  layNhanVien(){
    return this.h.get('http://localhost:3000/nhan_vien');
   }
  lay1NhanVien(id:number=0){
    return this.h.get(`http://localhost:3000/nhan_vien/${id}`);
  }
  themNhanVien(nv:INhanVien){
    return this.h.post('http://localhost:3000/nhan_vien',nv);
  }
  xoaNhanVien(id:number){
    return this.h.delete('http://localhost:3000/nhan_vien/'+id);
  }
  suaNhanVien(nv:INhanVien){
    return this.h.put('http://localhost:3000/nhan_vien/'+nv.id,nv);
  }
  
  // task
  layTask(){
    return this.h.get('http://localhost:3000/task');
   }
  lay1Task(id:number=0){
    return this.h.get(`http://localhost:3000/task/${id}`);
  }
  themTask(ta:ITask){
    return this.h.post('http://localhost:3000/task',ta);
  }
  xoaTask(id:number){
    return this.h.delete('http://localhost:3000/task/'+id);
  }
  suaTask(ta:ITask){
    return this.h.put('http://localhost:3000/du_an/'+ta.id,ta);
  }
  
  
}
