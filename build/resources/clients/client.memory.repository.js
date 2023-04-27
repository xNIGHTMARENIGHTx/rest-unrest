import Client from "./client.model.js";
const users = [
    new Client({ name: "as",
        surname: "sa",
        CT: "coadsa",
        login: "test1",
        password: "testtest"
    })
];
const getAll = async () => users;
const getById = async (id) => users.find((user) => user.id === id) || null;
const create = async ({ name, surname, CT, login, password }) => {
    const user = new Client({ name, surname, CT, login, password });
    users.push(user);
    return user;
};
const deleteById = async (id) => {
    const pos = users.findIndex((user) => user.id === id);
    if (pos === -1)
        return null;
    const client = users[pos];
    users.splice(pos, 1);
    return client;
};
const update = async ({ id, name, surname, CT, login, password }) => {
    const pos = users.findIndex((user) => user.id === id);
    if (pos === -1)
        return null;
    const newu = { ...users[pos], name, surname, CT, login, password, id };
    users.splice(pos, 1, newu);
    return newu;
};
export { users, getAll, getById, create, deleteById, update };
//# sourceMappingURL=client.memory.repository.js.map