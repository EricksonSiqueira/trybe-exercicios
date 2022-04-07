import Teacher from "./Teacher";

type TypeEvaluation = 'prova' | 'trabalho';

export default class Evaluation {
  private _score: number;
  private _teacher: Teacher;
  private _type: TypeEvaluation;

  constructor(score: number, teacher: Teacher, type: TypeEvaluation) {
    this._score = score;
    this._teacher = teacher;
    this._type = type;
  }

  get score():number {
    return this._score;
  }

  set score(newScore: number) {
    if(this._type === 'prova') {
      if(newScore > 0 && newScore <= 25) this._score = newScore;
      else console.log('score tem que ser maior do que 0 e menor que 25');
    } else if(this._type === 'trabalho') {
      if(newScore > 0 && newScore <= 50) this._score = newScore;
      else console.log('score tem que ser maior do que 0 e menor que 50');
    }
  }

  get type(): TypeEvaluation {
    return this._type;
  }

  set type(newType: TypeEvaluation) {
    this._type = newType;
  }

  get teacher(): Teacher {
    return this._teacher;
  }

  set teacher(newTeacher: Teacher) {
    this._teacher = newTeacher;
  }
}

