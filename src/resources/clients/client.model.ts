import { v4 as uuidv4 } from 'uuid';

import { TClientModel, TClientResponse } from "./client.type.js"

class Client {

  id: string;
  name: string;
  surname: string;
  CT: string;
  login: string;
  password: string;

  constructor({name = 'USER', surname = "Surname", CT = "Contact info", login = 'user', password = 'P@55w0rd' } = {}) {
    this.id = uuidv4();
    this.name = name;
    this.surname = surname;
    this.CT = CT;
    this.login = login;
    this.password = password;
  }

  static toResponse(user: TClientModel): TClientResponse {
    const { id, name, surname, CT, login } = user;
    return { id, name, surname, CT, login };
  }
}

export default Client;
