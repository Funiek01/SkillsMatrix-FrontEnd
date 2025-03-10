import { Component } from '@angular/core';

@Component({
  selector: 'app-manager-feedback',
  imports: [],
  templateUrl: './manager-feedback.component.html',
  styleUrl: './manager-feedback.component.scss'
})
export class ManagerFeedbackComponent {
  assessment = [
    { id: 1, date: "2023-06-15", topic: "Angular Basics", rate: 4.5 },
    { id: 2, date: "2023-07-20", topic: "Advanced TypeScript", rate: 4.7 },
    { id: 3, date: "2023-08-10", topic: "Reactive Programming", rate: 4.2 },
    { id: 4, date: "2023-09-05", topic: "Machine Learning Overview", rate: 4.8 },
    { id: 5, date: "2023-10-22", topic: "Backend Development with .NET", rate: 4.6 }
  ];
}
