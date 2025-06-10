import { CreateStudentDto } from './dto/create-student.dto';
import { UpdateStudentDto } from './dto/update-student.dto';
import { Student } from './entities/student.entity';
export declare class StudentsService {
    students: Student[];
    maxId: number;
    constructor();
    onModuleInit(): void;
    create(createStudentDto: CreateStudentDto): Student;
    findAll(): Student[];
    findOne(id: number): Student;
    update(id: number, updateStudentDto: UpdateStudentDto): string | Student;
    replace(id: number, newStudent: Student): Student;
    remove(id: number): string;
    private findIndexIfExists;
}
