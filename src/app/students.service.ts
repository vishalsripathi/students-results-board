import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class StudentsService {
  constructor(private httpClient: HttpClient) {}
  private maxIndex: number = null;
  private maxMarks: number = null;
  public studentsList(): Observable<any> {
    return this.httpClient.get<any>('assets/data.json').pipe(
      map((data) => {
        const students: any = [];
        data.forEach((element, i) => {
          students.push({
            name: element.name,
            marks: element.marks,
            rollNumber: element.rollNumber,
            totalMarks: +(
              +element.marks.Maths +
              +element.marks.Science +
              +element.marks.English
            ),
          });
          if (students[i].totalMarks > this.maxMarks) {
            this.maxIndex = i;
            this.maxMarks = students[i].totalMarks;
          }
        });
        students.map((o) => (o.status = this.getStatus(o)));
        return students;
      })
    );
  }
  private getStatus(element) {
    if (
      +element.marks.Maths > 20 &&
      +element.marks.Science > 20 &&
      +element.marks.English > 20
    ) {
      if (element.totalMarks === this.maxMarks) {
        return 'topper';
      } else {
        return 'pass';
      }
    } else {
      return 'fail';
    }
  }
}
