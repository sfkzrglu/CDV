import { Component } from '@angular/core';
import { StudentService } from '../Services/student.service'
import { Student } from '../Student';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-students',
  imports: [RouterLink],
  templateUrl: './students.component.html',
  styleUrl: './students.component.css'
})
export class StudentsComponent {
  students!: Student[];

  constructor(private studentService: StudentService) { }

  ngOnInit() {
    this.getStudents()
  }

  getStudents(): void {
    this.studentService.getStudents()
      .subscribe(students => this.students = students);
  }

  create(index: number, firstName: string, lastName: string): void {
    this.studentService.createStudent(
      new Student(index, firstName, lastName))
      .subscribe(student => { this.students.push(student); });
  }
  
  delete(student: Student): void {
    this.students = this.students.filter(s => s.id !== student.id);
    this.studentService.deleteStudent(student).subscribe();
  }

}
