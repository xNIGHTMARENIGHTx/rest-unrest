import * as usersRepo from './client.memory.repository.js';
import * as odersRepo from "../orders/order.memory.repository.js"

const getAll = () => usersRepo.getAll();
const getById = (id) => usersRepo.getById(id);
const createClient= ({name, surname, CT, login, password}) =>
    usersRepo.create({name, surname, CT, login, password});
const deleteById = async (id) =>{
    const user = await usersRepo.getById(id);
    usersRepo.deleteById(id);
    odersRepo.deleteByClientId(id);

    return user;
}
const update = ({id, name, surname, CT, login, password}) =>
    usersRepo.update({id, name, surname, CT, login, password});

export { 
    getAll,
    getById,
    createClient,
    deleteById,
    update 
};
