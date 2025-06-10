"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.StudentsService = void 0;
const common_1 = require("@nestjs/common");
const student_entity_1 = require("./entities/student.entity");
let StudentsService = class StudentsService {
    students;
    maxId;
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
    create(createStudentDto) {
        this.maxId++;
        const student = new student_entity_1.Student();
        student.id = this.maxId;
        student.firstName = createStudentDto.firstName;
        student.lastName = createStudentDto.lastName;
        this.students.push(student);
        return student;
    }
    findAll() {
        return this.students;
    }
    findOne(id) {
        const index = this.findIndexIfExists(id);
        return this.students[index];
    }
    update(id, updateStudentDto) {
        const index = this.findIndexIfExists(id);
        Object.assign(this.students[index], updateStudentDto);
        return this.students[index];
        return `This action updates a #${id} student`;
    }
    replace(id, newStudent) {
        const index = this.findIndexIfExists(id);
        if (index === -1) {
            throw new common_1.NotFoundException(`Student with ID ${id} not found`);
        }
        this.students[index] = { ...newStudent, id };
        return this.students[index];
    }
    remove(id) {
        const index = this.findIndexIfExists(id);
        this.students.splice(index, 1);
        return `This action removes a #${id} student`;
    }
    findIndexIfExists(id) {
        const idx = this.students.findIndex(s => s.id === id);
        if (idx == -1)
            throw new common_1.NotFoundException("No such student.");
        return idx;
    }
};
exports.StudentsService = StudentsService;
exports.StudentsService = StudentsService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [])
], StudentsService);
//# sourceMappingURL=students.service.js.map