// ./Student.ts

import Person from "./Person";
import Enrollable from "./Enrollable";
import EvaluationResult from "./EvaluationResult";

export default class Student extends Person implements Enrollable {
    private _enrollment: string = String();
    private _examsGrades: number[] = [];
    private _worksGrades: number[] = [];
    private _testingResults: EvaluationResult[] = []; 

    constructor(name: string, birthDate: Date) {
        super(name, birthDate);
        this.enrollment = this.generateEnrollment();
    }

    get enrollment(): string {
        return this._enrollment;
    }

    set enrollment(value: string) {
        if (value.length < 16) throw new Error('A matrícula deve possuir no mínimo 16 caracteres.');

        this._enrollment = value;
    }

    get examsGrades(): number[] {
        return this._examsGrades;
    }

    set examsGrades(value: number[]) {
        if (value.length > 4) throw new Error('A pessoa estudante só pode possuir 4 notas de provas.');

        this._examsGrades = value;
    }

    get worksGrades(): number[] {
        return this._worksGrades;
    }

    set worksGrades(value: number[]) {
        if (value.length > 2) throw new Error('A pessoa estudante só pode possuir 2 notas de trabalhos.');

        this._worksGrades = value;
    }

    generateEnrollment(): string {
        const randomStr = String(Date.now() * (Math.random() + 1)).replace(/\W/g, '');

        return `STU${randomStr}`;
    }

	get testingResults(): EvaluationResult[] {
		return this._testingResults;
	}

    sumGrades(): number {
        return [...this._testingResults].reduce((gradeAcc, note) => gradeAcc + note.score, 0);
    }

    sumAverageGrade(): number {
		const sumGrades = this.sumGrades();
		const testesQuantity = this._testingResults.length;

    	return Math.round(sumGrades / testesQuantity);
    }

	addEvaluationResult(newEvaluationResult: EvaluationResult): void {
		this._testingResults.push(newEvaluationResult);
	}

}