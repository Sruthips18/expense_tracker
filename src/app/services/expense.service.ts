import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import {Subject,tap} from 'rxjs'
@Injectable({
  providedIn: 'root'
})
export class ExpenseService {
  
  refreshRequired = new Subject()
  emitTransactionId = new Subject() 

  baseUrl:string="http://127.0.0.1:8000/api/v1/transactions/"
  constructor(private http:HttpClient) { }

  getTransactions(){
    return this.http.get(this.baseUrl)
  }
  retrieveTransactionDetails(id:number){
    return this.http.get(`${this.baseUrl}${id}/`)
  }
  createTransaction(data:any){
    return this.http.post(this.baseUrl,data).pipe(tap(data=>this.refreshRequired.next(true)))
  }
  updateTransaction(id:any,data:any){
    return this.http.put(`${this.baseUrl}${id}/`,data).pipe(tap(data=>this.refreshRequired.next(true)))
  }
  removeTransaction(id:number){
    return this.http.delete(`${this.baseUrl}${id}/`)
  }
  // for passing transaction id to subscriber anyone can subscribe the subject
  dispatchTransactionId(id:any){
    this.emitTransactionId.next(id)
  }
  transactionSummary(){
    return this.http.get(`${this.baseUrl}summary/`)
  }
}

 
