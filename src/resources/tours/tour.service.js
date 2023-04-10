import * as toursRepo from './tour.memory.repository.js';
import * as ordersRepo from "../orders/order.memory.repository.js"

const getAll = () => toursRepo.getAll();
const getById = (id) => toursRepo.getById(id);
const createTour= ({name, country, price, duration, agentId}) =>
    toursRepo.create({name, country, price, duration, agentId});
const deleteById = async (id) =>{
    const tour = await toursRepo.getById(id);
    toursRepo.deleteById(id);
    ordersRepo.deleteByTourId(id);

    return tour;
}
const update = ({id, name, country, price, duration, agentId}) =>
    toursRepo.update({id, name, country, price, duration, agentId});

export { 
    getAll,
    getById,
    createTour,
    deleteById,
    update 
};
