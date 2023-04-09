import * as clientsRepo from './client.memory.repository.js';
import * as odersRepo from "../orders/order.memory.repository.js"

const getAll = () => clientsRepo.getAll();
const getById = (id) => clientsRepo.getById(id);
const createClient= ({name, surname, CT, login, password}) =>
    clientsRepo.create({name, surname, CT, login, password});
const deleteById = async (id) =>{
    const client = await clientsRepo.getById(id);
    clientsRepo.deleteById(id);
    odersRepo.deleteByClientId(id);

    return client;
}
const update = ({id, name, surname, CT, login, password}) =>
    clientsRepo.update({id, name, surname, CT, login, password});

export { 
    getAll,
    getById,
    createClient,
    deleteById,
    update 
};
