import * as agentsRepo from './agent.memory.repository.js';
import * as toursRepo from "../tours/tour.memory.repository.js";
const getAll = () => agentsRepo.getAll();
const getById = (id) => agentsRepo.getById(id);
const createAgent = (agent) => agentsRepo.create(agent);
const deleteById = (id) => {
    const agent = agentsRepo.getById(id);
    agentsRepo.deleteById(id);
    toursRepo.deleteAgentId(id);
    return agent;
};
const update = (agent) => agentsRepo.update(agent);
export { getAll, getById, createAgent, deleteById, update };
//# sourceMappingURL=agent.service.js.map