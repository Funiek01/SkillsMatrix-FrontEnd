import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-admin-dashboard',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './admin-dashboard.component.html',
  styleUrl: './admin-dashboard.component.scss'
})
export class AdminDashboardComponent {
  employees = [
    { id: 1, firstName: "Vincent", lastName: "Vega", reportsTo: "Bill Kamis", email: "vincent.vega@gmail.com", startDate: "2001-05-27" },
    { id: 2, firstName: "Jules", lastName: "Winnfield", reportsTo: "Marsellus Wallace", email: "jules.winnfield@gmail.com", startDate: "1999-11-10" },
    { id: 3, firstName: "Winston", lastName: "Wolfe", reportsTo: "Marsellus Wallace", email: "winston.wolfe@gmail.com", startDate: "1995-06-05" },
    { id: 4, firstName: "Marsellus", lastName: "Wallace", reportsTo: "Self", email: "marsellus.wallace@gmail.com", startDate: "1990-02-14" },
    { id: 5, firstName: "Butch", lastName: "Coolidge", reportsTo: "No One", email: "butch.coolidge@gmail.com", startDate: "1993-08-21" }
  ];
}
