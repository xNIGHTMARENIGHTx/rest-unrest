import { v4 as uuidv4 } from 'uuid';
class Client {
    id;
    name;
    surname;
    CT;
    login;
    password;
    constructor({ name = 'USER', surname = "Surname", CT = "Contact info", login = 'user', password = 'P@55w0rd' } = {}) {
        this.id = uuidv4();
        this.name = name;
        this.surname = surname;
        this.CT = CT;
        this.login = login;
        this.password = password;
    }
    static toResponse(user) {
        const { id, name, surname, CT, login } = user;
        return { id, name, surname, CT, login };
    }
}
export default Client;
//# sourceMappingURL=client.model.js.map