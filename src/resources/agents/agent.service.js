import * as agentsRepo from './agent.memory.repository.js';
import * as toursRepo from "../tours/tour.memory.repository.js"

const getAll = () => agentsRepo.getAll();
const getById = (id) => agentsRepo.getById(id);
const createAgent = ({ name, surname, salary, phonenum, email, login }) =>
    agentsRepo.create({ name, surname, salary, phonenum, email, login });
const deleteById = (id) =>{
    const agent = agentsRepo.getById(id);
    agentsRepo.deleteById(id);
    toursRepo.deleteAgentId(id);

    return agent;
    }
const update = ({id, name, surname, salary, phonenum, email, login }) =>
    agentsRepo.update({id, name, surname, salary, phonenum, email, login });

export { 
    getAll,
    getById,
    createAgent,
    deleteById,
    update 
};
