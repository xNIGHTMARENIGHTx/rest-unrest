import { v4 as uuidv4 } from 'uuid';

class Agent {
  constructor({name = 'USER',
    surname = "Surname",
    salary = "salary",
    phonenum = "+333333",
    email = "sdadas@aasd.com",
    login = 'user',
    password = 'P@55w0rd',
  } = {}) {
    this.id = uuidv4();
    this.name = name;
    this.surname = surname;
    this.salary = salary;
    this.phonenum = phonenum;
    this.email = email;
    this.login = login;
    this.password = password;
  }

  static toResponse(agent) {
    const { id, name, surname, phonenum, email, login } = agent;
    return { id, name, surname, phonenum, email, login };
  }
}

export default Agent;
