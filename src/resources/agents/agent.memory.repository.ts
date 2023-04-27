import Agent from "./agent.model.js";
import { TAgent, TAgentModel } from "./agent.type.js";

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

const getAll = async (): Promise<TAgentModel[]> => agents;

const getById = async (id: string): Promise<TAgentModel | null> => agents.find((agent) => agent.id === id) || null;

const create = async ({ name, surname, salary, phonenum, email, login, password }: TAgent): Promise<TAgentModel> =>{
  const agent = new Agent({ name, surname, salary, phonenum, email, login, password });
  agents.push(agent);
  return agent;
}

const deleteById = async (id: string): Promise<TAgentModel | null> => {
  const pos = agents.findIndex((agent) => agent.id === id);
  
  if(pos === -1) return null;

  const agent = agents[pos];

  agents.splice(pos,1);

  return agent!;
}

const update = async ({id, name, surname, salary, phonenum, email, login, password }: TAgentModel): Promise<TAgentModel | null> =>{
  const pos = agents.findIndex((agent) => agent.id === id);

  if(pos === -1) return null;

  const newu = {...agents[pos], name, surname, salary, phonenum, email, login, password, id };

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
