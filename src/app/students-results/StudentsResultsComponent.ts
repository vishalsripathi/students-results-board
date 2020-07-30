import { Component, OnInit } from '@angular/core';
import { StudentsService } from '../students.service';

export interface students {
  name: string;
  rollNumber: string;
  totalMarks: number;
  status: string;
}

@Component({
  selector: 'app-students-results',
  templateUrl: './students-results.component.html',
  styleUrls: ['./students-results.component.css'],
})
export class StudentsResultsComponent implements OnInit {
  title = 'student-result-board';
  students: students[];
  topperarray: any = [];

  constructor(private studentsservice: StudentsService) {}

  ngOnInit() {
    this.studentsData();
  }

  public studentsData() {
    let response = this.studentsservice.studentsList();
    response.subscribe((report) => {
      const Total: number =
        +report[1].Maths + +report[1].Science + +report[1].English;
      this.students = report;
      this.students.sort((a, b) =>
        a.name > b.name ? 1 : b.name > a.name ? -1 : 0
      );
      for (const student of this.students) {
        this.topperarray.push(student.totalMarks);
      }
    });
  }

  public getClass(status) {
    if (status == 'pass') {
      return 'blue';
    } else if (status === 'fail') {
      return 'red';
    } else if (status === 'topper') {
      return 'green';
    }
  }
}
