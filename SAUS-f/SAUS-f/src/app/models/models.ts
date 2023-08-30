//Camada de modelos das entidades

export class HealthUnits {
  id: number = 0;
  name: string = "";
  local: string = "";
  openingTime: string = "";
  closingTime: string = "";
  doctors: Doctor[] = [];
}

export class Doctor {
  id: number = 0;
  name: string = "";
  specialty: string = "";
  schedulings: Scheduling[] = [];
}

export class Scheduling {
  id: number = 0;
  time: string = "";
  day: string = "";
  namePatient: string = "";
  document: string = "";
  status: number = 0;
}

export class User {
  id: string = "";
  name: string = "";
  login: string = "";
  password: string = "";
  role: string = "";
}


export class UserRegister {
  name: string = "";
  login: string = "";
  password: string = "";
  role: number = 0;
}
