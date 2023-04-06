import { v4 as uuidv4 } from 'uuid';

class User {
  constructor({ id = uuidv4(), name = 'USER', surname = "Surname", login = 'user', password = 'P@55w0rd' } = {}) {
    this.id = id;
    this.name = name;
    this.surname = surname;
    this.login = login;
    this.password = password;
  }

  static toResponse(user) {
    const { id, name, login } = user;
    return { id, name, login };
  }
}

export default User;
