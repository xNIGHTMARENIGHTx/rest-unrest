import * as clientsRepo from './client.memory.repository.js';
import * as ordersRepo from "../orders/order.memory.repository.js";
const getAll = () => clientsRepo.getAll();
const getById = (id) => clientsRepo.getById(id);
const createClient = (client) => clientsRepo.create(client);
const deleteById = async (id) => {
    const client = await clientsRepo.getById(id);
    clientsRepo.deleteById(id);
    ordersRepo.deleteByClientId(id);
    return client;
};
const update = (client) => clientsRepo.update(client);
export { getAll, getById, createClient, deleteById, update };
//# sourceMappingURL=client.service.js.map