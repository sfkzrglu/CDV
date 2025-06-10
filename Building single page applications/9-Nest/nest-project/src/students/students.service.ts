import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateStudentDto } from './dto/create-student.dto';
import { UpdateStudentDto } from './dto/update-student.dto';
import { Student } from './entities/student.entity'


@Injectable()
export class StudentsService {
  students: Student[];
  maxId:number;
  constructor() {
    this.students = [];
    this.maxId = 0;
    this.onModuleInit();
  }

  onModuleInit() {
    this.students.push({
      id: ++this.maxId, index: 32480,
      firstName: "Łukasz", lastName: "Kąśliwy"
    });
    this.students.push({
      id: ++this.maxId, index: 32481,
      firstName: "Marek", lastName: "Nowak"
    });
    this.students.push({
      id: ++this.maxId, index: 32482,
      firstName: "Zenon", lastName: "Zawada"
    });
  }


  create(createStudentDto: CreateStudentDto) {
    this.maxId++;
    const student = new Student();
    student.id = this.maxId;
    student.firstName = createStudentDto.firstName;
    student.lastName = createStudentDto.lastName;
    this.students.push(student);
    return student
    //return 'This action adds a new student';
  }

  findAll() {
    return this.students;
    //return `This action returns all students`;
  }

  findOne(id: number) {
    const index = this.findIndexIfExists(id);
    return this.students[index];
    //return `This action returns a #${id} student`;
  }

  update(id: number, updateStudentDto: UpdateStudentDto) {
    const index = this.findIndexIfExists(id);

    Object.assign(this.students[index], updateStudentDto);
    return this.students[index];
    return `This action updates a #${id} student`;
  }

  replace(id: number, newStudent: Student): Student {
    const index = this.findIndexIfExists(id);
    if (index === -1) {
      throw new NotFoundException(`Student with ID ${id} not found`);
    }
  
    this.students[index] = { ...newStudent, id }; 
    return this.students[index];
  }
  

  remove(id: number) {
    const index = this.findIndexIfExists(id);
    this.students.splice(index,1)
    return `This action removes a #${id} student`;
  }

  private findIndexIfExists(id: number): number {
    const idx = this.students.findIndex(s => s.id === id) // use findIndex()
    if (idx == -1)
    throw new NotFoundException("No such student.");
    return idx;
    }
   
}
