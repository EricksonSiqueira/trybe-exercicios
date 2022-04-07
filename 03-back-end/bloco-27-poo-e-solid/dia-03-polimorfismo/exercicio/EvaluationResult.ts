import Evaluation from "./Evaluation";

export default class EvaluationResult {
  private _evaluation: Evaluation;
  private _score: number;
  
  constructor(evaluation: Evaluation, score: number) {
    this._evaluation = evaluation;
    this._score = score;
  }

  get getScore(): number {
    return this._score;
  }

  set score(newScore: number) {
    if(newScore > 0 && newScore <= this._evaluation.score) {
      this._score = newScore;
    } else {
      console.log('score tem que ser positivo e menor do que a pontuação da avaliação');
    }
  }

  get evaluation(): Evaluation {
    return this._evaluation;
  }

  set evaluation(newEvaluation: Evaluation) {
    this._evaluation = newEvaluation;
  }
}