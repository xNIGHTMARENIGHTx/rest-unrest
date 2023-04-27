import * as clientsRepo from './client.memory.repository.js';
import * as ordersRepo from "../orders/order.memory.repository.js"
import { TClientModel, TClient } from './client.type.js';

const getAll = (): Promise<TClientModel[]> => clientsRepo.getAll();
const getById = (id: string): Promise<TClientModel | null> => clientsRepo.getById(id);
const createClient= (client: TClient): Promise<TClientModel> =>
    clientsRepo.create(client);
const deleteById = async (id: string): Promise<TClientModel | null> =>{
    const client = await clientsRepo.getById(id);
    clientsRepo.deleteById(id);
    ordersRepo.deleteByClientId(id);

    return client;
}
const update = (client: TClientModel): Promise<TClientModel | null> =>
    clientsRepo.update(client);

export { 
    getAll,
    getById,
    createClient,
    deleteById,
    update 
};
