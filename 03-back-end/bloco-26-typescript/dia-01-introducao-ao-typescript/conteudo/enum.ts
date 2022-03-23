enum StudentStatus {
  Active = 1, // define 1 número inicial
  Inactive, // número incial + 1
  Paused, // número anterior + 1
}

let newStudentStatus: StudentStatus = StudentStatus.Inactive;
// console.log(newStudentStatus);

enum StatusCodes {
  OK = 200,
  BadRequest = 400,
  Unauthorized,
  PaymentRequired,
  Forbidden,
  NotFound,
}

const ok = StatusCodes.OK;
const indiceOk = StatusCodes["OK"];
const stringBadRequest = StatusCodes[400];

// console.log(ok);
// console.log(indiceOk);
// console.log(stringBadRequest);

enum directionsGamePad {
  UP = "UP",
  DOWN = "DOWN",
  LEFT = "LEFT",
  RIGTH = "RIGHT",
}

//Exercícios

enum DiasDaSemana {
  Domingo = 1,
  Segunda = 2,
  Terca = 3,
  Quarta = 4,
  Quinta = 5,
  Sexta = 6,
  Sabado = 7,
};

enum Actions {
  Save = 1,
  Print,
  Edit,
  View,
  Close,
};
