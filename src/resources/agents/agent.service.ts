import * as agentsRepo from './agent.memory.repository.js';
import * as toursRepo from "../tours/tour.memory.repository.js"
import { TAgent, TAgentModel } from './agent.type.js';

const getAll = (): Promise<TAgentModel[]> => agentsRepo.getAll();
const getById = (id: string): Promise<TAgentModel | null> => agentsRepo.getById(id);
const createAgent = (agent: TAgent): Promise<TAgentModel> =>
    agentsRepo.create(agent);
const deleteById = (id: string): Promise<TAgentModel | null> =>{
    const agent = agentsRepo.getById(id);
    agentsRepo.deleteById(id);
    toursRepo.deleteAgentId(id);

    return agent;
    }
const update = (agent: TAgentModel): Promise<TAgentModel | null> =>
    agentsRepo.update(agent);

export { 
    getAll,
    getById,
    createAgent,
    deleteById,
    update 
};
