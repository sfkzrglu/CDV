import { Component } from '@angular/core';
import { Student } from '../Student';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { StudentService } from '../Services/student.service';
import { UpperCasePipe } from '@angular/common';
import { FormsModule } from "@angular/forms";


@Component({
  selector: 'app-student-detail',
  imports: [UpperCasePipe, FormsModule],
  templateUrl: './student-detail.component.html',
  styleUrl: './student-detail.component.css'
})
export class StudentDetailComponent {
  student?: Student;

  constructor(
    private route: ActivatedRoute,
    private studentService: StudentService,
    private location: Location
  ) { }

  getStudent(): void {
    const pathId = this.route.snapshot.paramMap.get('id');
    if (pathId) {
      this.studentService.getStudent(+pathId)
        .subscribe(student => this.student = student);
    }
  }

  ngOnInit() {
    this.getStudent();
  }

  save(): void {
    this.studentService.updateStudent(this.student!)
      .subscribe(() => this.goBack());
  }

  goBack(): void {
    throw new Error('Method not implemented.');
  }

}
