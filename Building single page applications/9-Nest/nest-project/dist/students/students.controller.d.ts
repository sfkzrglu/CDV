import { StudentsService } from './students.service';
import { CreateStudentDto } from './dto/create-student.dto';
import { UpdateStudentDto } from './dto/update-student.dto';
import { Student } from './entities/student.entity';
export declare class StudentsController {
    private readonly studentsService;
    constructor(studentsService: StudentsService);
    create(createStudentDto: CreateStudentDto): Student;
    findAll(): Student[];
    findOne(id: string): Student;
    update(id: string, updateStudentDto: UpdateStudentDto): string | Student;
    remove(id: string): string;
    replaceStudent(id: string, newStudent: Student): Student;
}
