import { Injectable, OnInit, Type } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AngularFireDatabase } from '@angular/fire/compat/database';

@Injectable({
  providedIn: 'root'
})

export class MapicpinserviceService {
  

  constructor(private http: HttpClient,private db: AngularFireDatabase) { }
 
  addData(payload:any):void {
    const dbRef = this.db.list('/add');
    dbRef.push(payload).then(res => {
      payload.id = res.key
      const database = this.db.object('/add/'+`${res.key}`)
      database.update(payload).then(result => {

      }).catch(err => {
        console.log(err)
      })
    }).catch(err => {
      console.error(err)
    })
  }

  
}

