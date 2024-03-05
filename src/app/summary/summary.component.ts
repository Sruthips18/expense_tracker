import { Component } from '@angular/core';
import { ExpenseService } from '../services/expense.service';

@Component({
  selector: 'app-summary',
  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.css']
})
export class SummaryComponent {
   
  totalIncome : any
  totalExpense : any
  summary : any

   constructor(private service:ExpenseService){
    this.service.transactionSummary().subscribe((data:any)=>{
      this.totalExpense=data.total_expense
      this.totalIncome=data.total_income
      this.summary=data.category_summary
      console.log(this.totalExpense)
      console.log(this.totalIncome)
      console.log(this.summary)   
    })
   }
}
