import Agent from "./agent.model.js";

const agents = [
  new Agent({name: "as",
  surname: "sa",
  salary: "5555",
  phonenum: "+4444",
  email: "dadads@saddssda.com",
  login: "test1",
  password: "testtest"
  })
]

const getAll = async () => agents;

const getById = async (id) => agents.find((agent) => agent.id === id);

const create = async ({ name, surname, salary, phonenum, email, login }) =>{
  const agent = new Agent({ name, surname, salary, phonenum, email, login });
  agents.push(agent);
  return agent;
}

const deleteById = async (id) => {
  const pos = agents.findIndex((agent) => agent.id === id);
  
  if(pos === -1) return null;

  const agent = agents[pos];

  agents.splice(pos,1);

  return agent;
}

const update = async ({id, name, surname, salary, phonenum, email, login }) =>{
  const pos = agents.findIndex((agent) => agent.id === id);

  if(pos === -1) return null;

  const newu = {...agents[pos], name, surname, salary, phonenum, email, login };

  agents.splice(pos, 1, newu);
  return newu;
}

export { 
  agents,
  getAll,
  getById,
  create,
  deleteById,
  update 
};
