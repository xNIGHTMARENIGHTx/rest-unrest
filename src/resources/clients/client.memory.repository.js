import User from "./client.model.js";

const users = [
  new User({name: "as",
  surname: "sa",
  CT: "coadsa",
  login: "test1",
  password: "testtest"
  })
]

const getAll = async () => users;

const getById = async (id) => users.find((user) => user.id === id);

const create = async ({name, surname, CT, login, password}) =>{
  const user = new User({name, surname, CT, login, password});
  users.push(user);
}

const deleteById = async (id) => {
  const pos = users.findIndex((user) => user.id === id);
  
  if(pos === -1) return null;

  users.splice(pos,1);

  return null;
}

const update = async ({id, name, surname, CT, login, password}) =>{
  const pos = users.findIndex((user) => user.id === id);

  if(pos === -1) return null;

  return {...users[pos], name, surname, CT, login, password}
}

export { 
  users,
  getAll,
  getById,
  create,
  deleteById,
  update 
};
