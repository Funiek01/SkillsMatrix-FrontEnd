import { NgClass } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-user-self-assessment',
  imports: [NgClass],
  templateUrl: './user-self-assessment.component.html',
  styleUrl: './user-self-assessment.component.scss'
})
export class UserSelfAssessmentComponent {
  programmingLanguages = ['C#', 'JavaScript', 'Python', 'Java', 'C++'];

  selectedSkills: { [key: string]: number } = {};

  selectSkill(language: string, skill: number) {
    this.selectedSkills[language] = skill;
  }

}
