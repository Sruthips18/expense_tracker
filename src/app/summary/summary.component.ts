import { Component } from '@angular/core';
import { ExpenseService } from '../services/expense.service';

@Component({
  selector: 'app-summary',
  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.css']
})
export class SummaryComponent {

   constructor(private service:ExpenseService){
    this.service.transactionSummary().subscribe(data=>console.log(data))
   }
}
