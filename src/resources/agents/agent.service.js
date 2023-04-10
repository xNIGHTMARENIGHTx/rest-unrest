import * as agentsRepo from './agent.memory.repository.js';

const getAll = () => agentsRepo.getAll();
const getById = (id) => agentsRepo.getById(id);
const createAgent = ({ name, surname, salary, phonenum, email, login }) =>
    agentsRepo.create({ name, surname, salary, phonenum, email, login });
const deleteById = (id) => agentsRepo.deleteById(id);
const update = ({id, name, surname, salary, phonenum, email, login }) =>
    agentsRepo.update({id, name, surname, salary, phonenum, email, login });

export { 
    getAll,
    getById,
    createAgent,
    deleteById,
    update 
};
