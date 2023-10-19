import { Component } from '@angular/core';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-budget',
  templateUrl: './budget.component.html',
  styleUrls: ['./budget.component.css']
})
export class BudgetComponent {

  Alert(){
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, Submit!'
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire(
          'Submit!',
          'Your budget has been Submit.',
          'success'
        )
      }
    })
  }
}
